import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransacModule } from './transac/transac.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transac } from './transac/entities/transac.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TransacModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      ignoreEnvFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Transac],
      synchronize: true
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
