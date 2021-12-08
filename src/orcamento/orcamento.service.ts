import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Orcamento from './interfaces/orcamento.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class OrcamentoService {
  constructor(
    @InjectModel('Orcamento')
    private readonly orcamentoModel: mongoose.Model<Orcamento>,
  ) {}

  async findByBuildingId(idbuilding: string): Promise<Orcamento[]> {
    return await this.orcamentoModel.find({
      idbuilding: idbuilding,
    });
  }
}
