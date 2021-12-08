import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlanejamentoService } from './planejamento.service';

@Controller('planejamento')
export class PlanejamentoController {
  constructor(private readonly planejamentoService: PlanejamentoService) {}

  @Get('')
  findByBuildingId(@Query() query) {
    return this.planejamentoService.findByBuildingId(query.idbuilding);
  }

  @Get('/estoque')
  fluxoEstoque(@Query() query) {
    const startDate = new Date(query.startDate);
    const endDate = new Date(query.endDate);
    const idbuilding = query.idbuilding;

    return this.planejamentoService.fluxoEstoque(
      idbuilding,
      startDate,
      endDate,
    );
  }

  @Get('objetosBIM/executado')
  bimExecutado(@Query() query) {
    const endDate = new Date(query.endDate);
    const idbuilding = query.idbuilding;

    return this.planejamentoService.objetosBIM(idbuilding, endDate);
  }

  @Get('/desembolso/previsto')
  desembolsoPrevisto(@Query() query) {
    const startDate = new Date(query.startDate);
    const endDate = new Date(query.endDate);
    const idbuilding = query.idbuilding;

    return this.planejamentoService.desembolsoPrevisto(
      idbuilding,
      startDate,
      endDate,
    );
  }

  @Get('/desembolso/executado')
  desembolsoExecutado(@Query() query) {
    const startDate = new Date(query.startDate);
    const endDate = new Date(query.endDate);
    const idbuilding = query.idbuilding;

    return this.planejamentoService.desembolsoExecutado(
      idbuilding,
      startDate,
      endDate,
    );
  }

  @Get('/primeira')
  primeiraAtividade(@Query() query) {
    const idbuilding = query.idbuilding;
    return this.planejamentoService.primeira(idbuilding);
  }

  @Get('/ultima')
  ultimaAtividade(@Query() query) {
    const idbuilding = query.idbuilding;
    return this.planejamentoService.ultima(idbuilding);
  }
}
