import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoBimService } from './objeto-bim.service';

describe('ObjetoBimService', () => {
  let service: ObjetoBimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjetoBimService],
    }).compile();

    service = module.get<ObjetoBimService>(ObjetoBimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
