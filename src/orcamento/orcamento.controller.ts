import { Controller, Get, Param, Query } from '@nestjs/common';
import { OrcamentoService } from './orcamento.service';

@Controller('orcamento')
export class OrcamentoController {
  constructor(private readonly orcamentoService: OrcamentoService) {}

  @Get(':idbuilding')
  findByBuildingId(@Param() param) {
    return this.orcamentoService.findByBuildingId(param.idbuilding);
  }

  @Get('previsto/:idbuilding')
  previstoData(@Param() param, @Query() query) {
    const startDate = new Date(query.startDate);
    const endDate = new Date(query.endDate);
    const idbuilding = param.idbuilding;
  }
}
