import { Controller, Get, Param, Query } from '@nestjs/common';
import { InsumoService } from './insumo.service';

@Controller('insumos')
export class InsumoController {
  constructor(private readonly insumoService: InsumoService) {}

  @Get('')
  findByBuildingId(@Query() query) {
    return this.insumoService.findByBuildingId(query.idbuilding);
  }

  @Get('/custo')
  custoPorInsumo(@Query() query) {
    return this.insumoService.custoPorInsumo(query.idbuilding);
  }

  @Get('/objetosBIM')
  bimComInsumo(@Query() query) {
    return this.insumoService.bimComInsumo(
      query.idbuilding,
      query.descricaoInsumo,
    );
  }

  @Get('/estoque')
  fluxoEstoque(@Query() query) {
    return this.insumoService.fluxoEstoque(
      query.idbuilding,
      query.descricaoInsumo,
      new Date(query.startDate),
      new Date(query.endDate),
    );
  }
}
