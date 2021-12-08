import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ObjetoBimController } from './objeto-bim.controller';
import { ObjetoBimService } from './objeto-bim.service';
import { ObjetoBIMSchema } from './schemas/objeto-bim.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ObjetoBIM', schema: ObjetoBIMSchema, collection: '_objetosBIM' },
    ]),
  ],
  controllers: [ObjetoBimController, ObjetoBimController],
  providers: [ObjetoBimService, ObjetoBimService],
})
export class ObjetoBimModule {}
