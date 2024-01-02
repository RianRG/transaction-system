import { Test, TestingModule } from '@nestjs/testing';
import { TransacService } from './transac.service';

describe('TransacService', () => {
  let service: TransacService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransacService],
    }).compile();

    service = module.get<TransacService>(TransacService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
