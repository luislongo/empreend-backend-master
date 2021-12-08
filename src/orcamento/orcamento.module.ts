import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrcamentoController } from './orcamento.controller';
import { OrcamentoService } from './orcamento.service';
import { OrcamentoSchema } from './schemas/orcamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Orcamento',
        schema: OrcamentoSchema,
        collection: '_orcamentos',
      },
    ]),
  ],
  controllers: [OrcamentoController],
  providers: [OrcamentoService],
})
export class OrcamentoModule {}
