import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpreendimentoController } from './empreendimento.controller';
import { EmpreendimentoService } from './empreendimento.service';
import { EmpreendimentoSchema } from './schemas/empreendimento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Empreendimento',
        schema: EmpreendimentoSchema,
        collection: '_empreendimentos',
      },
    ]),
  ],
  controllers: [EmpreendimentoController],
  providers: [EmpreendimentoService],
})
export class EmpreendimentoModule {}
