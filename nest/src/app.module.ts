import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransacModule } from './transac/transac.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transac } from './transac/entities/transac.entity';

@Module({
  imports: [
    TransacModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Transac],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
