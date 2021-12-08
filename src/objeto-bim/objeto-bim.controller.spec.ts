import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoBimController } from './objeto-bim.controller';

describe('ObjetoBimController', () => {
  let controller: ObjetoBimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjetoBimController],
    }).compile();

    controller = module.get<ObjetoBimController>(ObjetoBimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
