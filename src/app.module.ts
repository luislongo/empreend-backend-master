import config from './config/keys';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjetoBimModule } from './objeto-bim/objeto-bim.module';
import { EmpreendimentoModule } from './empreendimento/empreendimento.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InsumoModule } from './insumo/insumo.module';
import { OrcamentoModule } from './orcamento/orcamento.module';
import { PlanejamentoModule } from './planejamento/planejamento.module';
import { QuantitativoModule } from './quantitativo/quantitativo.module';

@Module({
  imports: [
    ObjetoBimModule,
    EmpreendimentoModule,
    InsumoModule,
    OrcamentoModule,
    PlanejamentoModule,
    QuantitativoModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
