import { Test, TestingModule } from '@nestjs/testing';
import { TransacController } from './transac.controller';
import { TransacService } from './transac.service';
import { Transac } from './entities/transac.entity';

describe('TransacController', () => {
  let controller: TransacController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransacController],
      providers: [TransacService, Transac],
    }).compile();

    controller = module.get<TransacController>(TransacController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
