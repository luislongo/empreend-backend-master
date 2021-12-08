import { Controller, Get, Param } from '@nestjs/common';
import { ObjetoBimService } from './objeto-bim.service';
@Controller('objeto-bim')
export class ObjetoBimController {
  constructor(private readonly objetoBIMService: ObjetoBimService) {}
  @Get(':buildingId')
  findByBuildingId(@Param() param) {
    return this.objetoBIMService.findByBuildingId(param.buildingId);
  }
}
