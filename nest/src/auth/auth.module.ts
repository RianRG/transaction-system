import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TransacModule } from 'src/transac/transac.module';
import { JwtModule } from '@nestjs/jwt';
import { TransacService } from 'src/transac/transac.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transac } from 'src/transac/entities/transac.entity';
import 'dotenv/config';
@Module({
  imports: [
    TransacModule,
    JwtModule.register({
      global: true,
      secret: 'AKDJAKJDKJAKJDKJADD',
      signOptions: { expiresIn: '7d' }
    }),
    TypeOrmModule.forFeature([Transac])
  ],
  providers: [TransacService],
  controllers: [AuthController],
})
export class AuthModule {}