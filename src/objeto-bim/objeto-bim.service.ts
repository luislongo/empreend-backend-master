import { Injectable } from '@nestjs/common';
import ObjetoBIM from './interfaces/objeto-bim.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ObjetoBimService {
  constructor(
    @InjectModel('ObjetoBIM') private readonly objetoBIMModel: Model<ObjetoBIM>,
  ) {}

  async findByBuildingId(buildingId: string): Promise<ObjetoBIM[]> {
    return await this.objetoBIMModel.find({ idbuilding: buildingId });
  }
}
