import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TransacModule } from 'src/transac/transac.module';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from './jwtConstants';

@Module({
  imports: [
    TransacModule,
    JwtModule.register({
      global: true,
      secret: jwt.secret,
      signOptions: { expiresIn: '7d' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
