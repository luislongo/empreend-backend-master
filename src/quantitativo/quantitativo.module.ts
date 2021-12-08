import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuantitativoController } from './quantitativo.controller';
import { QuantitativoService } from './quantitativo.service';
import { QuantitativoSchema } from './schemas/quantitativo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Quantitativo',
        schema: QuantitativoSchema,
        collection: '_quantitativos',
      },
    ]),
  ],
  controllers: [QuantitativoController],
  providers: [QuantitativoService],
})
export class QuantitativoModule {}
