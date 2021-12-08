import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import Empreendimento from './interfaces/empreendimento.interface';

@Injectable()
export class EmpreendimentoService {
  constructor(
    @InjectModel('Empreendimento')
    private readonly empreendimentoModel: mongoose.Model<Empreendimento>,
  ) {}

  async findByBuildingId(idbuilding: string): Promise<Empreendimento> {
    return await this.empreendimentoModel.findOne({
      idbuilding: idbuilding,
    });
  }
}
