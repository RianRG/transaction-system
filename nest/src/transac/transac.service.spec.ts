import { Test, TestingModule } from '@nestjs/testing';
import { TransacService } from './transac.service';
import { Transac } from './entities/transac.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TransacService', () => {
  let service: TransacService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransacService,
        {
          provide: getRepositoryToken(Transac),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            remove: jest.fn(),
          }
        }
      ],
    }).compile();

    service = module.get<TransacService>(TransacService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
