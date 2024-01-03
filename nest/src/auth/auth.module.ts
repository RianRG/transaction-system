import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TransacModule } from 'src/transac/transac.module';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from './jwtConstants';
import { TransacService } from 'src/transac/transac.service';

@Module({
  imports: [
    TransacModule,
    JwtModule.register({
      global: true,
      secret: jwt.secret,
      signOptions: { expiresIn: '7d' }
    })
  ],
  providers: [TransacService],
  controllers: [AuthController],
})
export class AuthModule {}