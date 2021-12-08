import { Controller, Get, Param } from '@nestjs/common';
import { QuantitativoService } from './quantitativo.service';

@Controller('quantitativo')
export class QuantitativoController {
  constructor(private readonly quantitativoService: QuantitativoService) {}

  @Get(':idbuilding')
  findByBuildingId(@Param() param) {
    return this.quantitativoService.findByBuildingId(param.idbuilding);
  }
}
