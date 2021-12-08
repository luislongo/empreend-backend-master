import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import Quantitativo from './interfaces/quantitativo.interface';

@Injectable()
export class QuantitativoService {
  constructor(
    @InjectModel('Quantitativo')
    private readonly quantitativoModel: mongoose.Model<Quantitativo>,
  ) {}

  findByBuildingId(idbuilding: string) {
    return this.quantitativoModel.find({ idbuilding: idbuilding });
  }
}
