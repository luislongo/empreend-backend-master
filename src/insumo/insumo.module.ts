import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InsumoController } from './insumo.controller';
import { InsumoService } from './insumo.service';
import { InsumoSchema } from './schemas/insumo.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Insumo',
        schema: InsumoSchema,
        collection: '_insumos',
      },
    ]),
  ],
  controllers: [InsumoController],
  providers: [InsumoService],
})
export class InsumoModule {}
