import { Module } from '@nestjs/common';
import { TransacService } from './transac.service';
import { TransacController } from './transac.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transac } from './entities/transac.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transac])
  ],
  controllers: [TransacController],
  providers: [TransacService],
  exports: [TransacService],
})
export class TransacModule {}
