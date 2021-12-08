import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import Planejamento from './interfaces/planejamento.interface';

@Injectable()
export class PlanejamentoService {
  constructor(
    @InjectModel('Planejamento')
    private readonly planejamentoModel: mongoose.Model<Planejamento>,
  ) {}

  findByBuildingId(idbuilding: string) {
    return this.planejamentoModel.find({ idbuilding: idbuilding });
  }

  async desembolsoPrevisto(
    idbuilding: string,
    startDate: Date,
    endDate: Date,
  ): Promise<any> {
    return this.planejamentoModel.aggregate([
      {
        $match: {
          idbuilding: idbuilding,
          'planejamento.inicioPlanejado': { $gte: startDate, $lte: endDate },
        },
      },
      {
        $project: {
          idPlanejamento: 1,
          date: '$planejamento.inicioPlanejado',
        },
      },
      {
        $lookup: {
          from: '_orcamentos',
          localField: 'idPlanejamento',
          foreignField: 'idPlanejamento',
          as: 'orcamento',
        },
      },
      { $unwind: '$orcamento' },
      {
        $group: {
          _id: {
            month: { $month: '$date' },
            year: { $year: '$date' },
          },
          total: { $sum: '$orcamento.custoTotal.total' },
          totalSemBDI: {
            $sum: '$orcamento.custoTotal.totalSemBDI',
          },
          material: { $sum: '$orcamento.custoTotal.material' },
          equipamento: { $sum: '$orcamento.custoTotal.equipamento' },
          transporte: { $sum: '$orcamento.custoTotal.transporte' },
          maoDeObra: { $sum: '$orcamento.custoTotal.maoDeObra' },
          terceirizado: { $sum: '$orcamento.custoTotal.tercerizado' },
          verba: { $sum: '$orcamento.custoTotal.verba' },
          comissionamento: { $sum: '$orcamento.custoTotal.comissionamento' },
          outros: { $sum: '$orcamento.custoTotal.outros' },
        },
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 },
      },
    ]);
  }

  async desembolsoExecutado(
    idbuilding: string,
    startDate: Date,
    endDate: Date,
  ): Promise<any> {
    return this.planejamentoModel.aggregate([
      {
        $match: {
          idbuilding: idbuilding,
          'planejamento.inicioExecucao': { $gte: startDate, $lte: endDate },
        },
      },
      {
        $project: {
          idPlanejamento: 1,
          date: '$planejamento.inicioExecucao',
        },
      },
      {
        $lookup: {
          from: '_orcamentos',
          localField: 'idPlanejamento',
          foreignField: 'idPlanejamento',
          as: 'orcamento',
        },
      },
      { $unwind: '$orcamento' },
      {
        $group: {
          _id: {
            month: { $month: '$date' },
            year: { $year: '$date' },
          },
          total: { $sum: '$orcamento.custoTotal.total' },
          totalSemBDI: {
            $sum: '$orcamento.custoTotal.totalSemBDI',
          },
          material: { $sum: '$orcamento.custoTotal.material' },
          equipamento: { $sum: '$orcamento.custoTotal.equipamento' },
          transporte: { $sum: '$orcamento.custoTotal.transporte' },
          maoDeObra: { $sum: '$orcamento.custoTotal.maoDeObra' },
          terceirizado: { $sum: '$orcamento.custoTotal.tercerizado' },
          verba: { $sum: '$orcamento.custoTotal.verba' },
          comissionamento: { $sum: '$orcamento.custoTotal.comissionamento' },
          outros: { $sum: '$orcamento.custoTotal.outros' },
        },
      },
      {
        $sort: { '_id.month': 1, '_id.year': 1 },
      },
    ]);
  }
  async objetosBIM(idbuilding: string, endDate: Date) {
    return this.planejamentoModel.aggregate([
      {
        $match: {
          idbuilding: idbuilding,
          'planejamento.fimExecucao': { $lte: endDate },
        },
      },
      {
        $lookup: {
          from: '_orcamentos',
          localField: 'idPlanejamento',
          foreignField: 'idPlanejamento',
          as: 'orcamentos',
        },
      },
      { $unwind: '$orcamentos' },
      {
        $project: {
          date: '$planejamento.fimExecucao',
          objetosBIM: '$orcamentos.objetosBIM',
        },
      },
      { $unwind: '$objetosBIM' },
      {
        $group: {
          _id: '$objetosBIM.guidVisus',
          guid: { $first: '$objetosBIM.guidVisus' },
          quantidade: { $sum: '$objetosBIM.quantidade' },
        },
      },
    ]);
  }

  async fluxoEstoque(
    idbuilding: string,
    startDate: Date,
    endDate: Date,
  ): Promise<any> {
    return this.planejamentoModel.aggregate([
      {
        $match: {
          idbuilding: idbuilding,
          'planejamento.inicioExecucao': { $gte: startDate, $lte: endDate },
        },
      },
      {
        $project: {
          idPlanejamento: 1,
          date: '$planejamento.inicioExecucao',
        },
      },
      {
        $lookup: {
          from: '_insumos',
          localField: 'idPlanejamento',
          foreignField: 'idPlanejamento',
          as: 'insumos',
        },
      },
      { $unwind: '$insumos' },
      {
        $group: {
          _id: {
            month: { $month: '$date' },
            year: { $year: '$date' },
            descricao: '$insumos.descricao',
          },
          quantidade: { $sum: '$insumos.quantidade' },
          unidade: { $first: '$insumos.unidade' },
        },
      },
      {
        $group: {
          _id: {
            month: '$_id.month',
            year: '$_id.year',
          },
          insumos: {
            $push: {
              descricao: '$_id.descricao',
              quantidade: '$quantidade',
              unidade: '$unidade',
            },
          },
        },
      },
      {
        $sort: { '_id.month': 1, '_id.year': 1 },
      },
    ]);
  }

  async primeira(idbuilding: string): Promise<any> {
    return this.planejamentoModel.aggregate([
      { $match: { idbuilding: idbuilding } },
      { $sort: { 'planejamento.inicioPlanejado': 1 } },
      { $limit: 1 },
    ]);
  }

  async ultima(idbuilding: string): Promise<any> {
    return this.planejamentoModel.aggregate([
      { $match: { idbuilding: idbuilding } },
      { $sort: { 'planejamento.fimPlanejado': -1 } },
      { $limit: 1 },
    ]);
  }
}
