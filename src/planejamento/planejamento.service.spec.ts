import { Test, TestingModule } from '@nestjs/testing';
import { PlanejamentoService } from './planejamento.service';

describe('PlanejamentoService', () => {
  let service: PlanejamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanejamentoService],
    }).compile();

    service = module.get<PlanejamentoService>(PlanejamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
