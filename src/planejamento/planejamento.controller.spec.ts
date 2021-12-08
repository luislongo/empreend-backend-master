import { Test, TestingModule } from '@nestjs/testing';
import { PlanejamentoController } from './planejamento.controller';

describe('PlanejamentoController', () => {
  let controller: PlanejamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanejamentoController],
    }).compile();

    controller = module.get<PlanejamentoController>(PlanejamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
