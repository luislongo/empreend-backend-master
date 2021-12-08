import { Test, TestingModule } from '@nestjs/testing';
import { QuantitativoController } from './quantitativo.controller';

describe('QuantitativoController', () => {
  let controller: QuantitativoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuantitativoController],
    }).compile();

    controller = module.get<QuantitativoController>(QuantitativoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
