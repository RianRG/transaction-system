import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TransacModule } from 'src/transac/transac.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TransacModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '7d' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
