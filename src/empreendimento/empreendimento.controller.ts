import { Controller, Get, Query } from '@nestjs/common';
import { EmpreendimentoService } from './empreendimento.service';

@Controller('empreendimento')
export class EmpreendimentoController {
  constructor(private readonly empreendimentoService: EmpreendimentoService) {}

  @Get('/')
  findByBuildingId(@Query() query) {
    return this.empreendimentoService.findByBuildingId(query.idbuilding);
  }
}
