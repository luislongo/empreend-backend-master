import { Test, TestingModule } from '@nestjs/testing';
import { QuantitativoService } from './quantitativo.service';

describe('QuantitativoService', () => {
  let service: QuantitativoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuantitativoService],
    }).compile();

    service = module.get<QuantitativoService>(QuantitativoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
