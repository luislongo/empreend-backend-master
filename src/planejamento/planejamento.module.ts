import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanejamentoController } from './planejamento.controller';
import { PlanejamentoService } from './planejamento.service';
import { PlanejamentoSchema } from './schemas/planejamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Planejamento',
        schema: PlanejamentoSchema,
        collection: '_planejamento',
      },
    ]),
  ],
  controllers: [PlanejamentoController],
  providers: [PlanejamentoService],
})
export class PlanejamentoModule {}
