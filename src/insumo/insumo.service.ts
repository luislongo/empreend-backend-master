import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Insumo from './interfaces/insumo.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class InsumoService {
  constructor(
    @InjectModel('Insumo') private readonly insumoModel: mongoose.Model<Insumo>,
  ) {}

  async findByBuildingId(idbuilding: string): Promise<Insumo[]> {
    return this.insumoModel.find({
      idbuilding: idbuilding,
    });
  }

  async custoPorInsumo(idbuilding: string): Promise<any[]> {
    return this.insumoModel.aggregate([
      {
        $match: {
          idbuilding: idbuilding,
        },
      },
      {
        $group: {
          _id: '$descricao',
          total: { $sum: '$custoTotal.total' },
          totalSemBDI: {
            $sum: '$custoTotal.totalSemBDI',
          },
          material: { $sum: '$custoTotal.material' },
          equipamento: { $sum: '$custoTotal.equipamento' },
          transporte: { $sum: '$custoTotal.transporte' },
          maoDeObra: { $sum: '$custoTotal.maoDeObra' },
          terceirizado: { $sum: '$custoTotal.tercerizado' },
          verba: { $sum: '$custoTotal.verba' },
          comissionamento: { $sum: '$custoTotal.comissionamento' },
          outros: { $sum: '$custoTotal.outros' },
        },
      },
      { $sort: { total: -1 } },
    ]);
  }

  async fluxoEstoque(
    idbuilding: string,
    descricao: string,
    startDate: Date,
    endDate: Date,
  ) {
    return this.insumoModel.aggregate([
      {
        $match: {
          idbuilding: idbuilding,
          descricao: descricao,
        },
      },
      {
        $lookup: {
          from: '_planejamento',
          localField: 'idPlanejamento',
          foreignField: 'idPlanejamento',
          as: 'planejamento',
        },
      },
      { $unwind: '$planejamento' },
      {
        $match: {
          'planejamento.planejamento.inicioExecucao': {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: '$planejamento.planejamento.inicioExecucao' },
            year: { $year: '$planejamento.planejamento.inicioExecucao' },
          },
          descricao: { $first: '$descricao' },
          unidade: { $first: '$unidade' },
          quantidade: { $sum: '$quantidade' },
          total: { $sum: '$custoTotal.total' },
          totalSemBDI: {
            $sum: '$custoTotal.totalSemBDI',
          },
          material: { $sum: '$custoTotal.material' },
          equipamento: { $sum: '$custoTotal.equipamento' },
          transporte: { $sum: '$custoTotal.transporte' },
          maoDeObra: { $sum: '$custoTotal.maoDeObra' },
          terceirizado: { $sum: '$custoTotal.tercerizado' },
          verba: { $sum: '$custoTotal.verba' },
          comissionamento: { $sum: '$custoTotal.comissionamento' },
          outros: { $sum: '$custoTotal.outros' },
        },
      },
      {
        $project: {
          month: '$_id.month',
          year: '$_id.year',
          descricao: 1,
          unidade: 1,
          quantidade: 1,
          custo: {
            total: '$total',
            totalSemBDI: '$totalSenBDI',
            material: '$material',
            equipamento: '$equipamento',
            transporte: '$transporte',
            maoDeObra: '$maoDeObra',
            terceirizado: '$terceirizado',
            verba: '$verba',
            comissionamento: '$comissionamento',
            outros: '$outros',
          },
        },
      },
      {
        $sort: {
          year: 1,
          month: 1,
        },
      },
    ]);
  }

  async bimComInsumo(idbuilding: string, descricao: string) {
    return this.insumoModel.aggregate([
      {
        $match: {
          idbuilding: idbuilding,
          descricao: descricao,
        },
      },
      { $unwind: '$objetosBIM' },
      {
        $group: {
          _id: '$descricao',
          objetosBIM: { $push: '$objetosBIM' },
        },
      },
    ]);
  }
}
