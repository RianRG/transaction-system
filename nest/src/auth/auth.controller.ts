import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post, Get } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import { TransacService } from 'src/transac/transac.service';
import * as bcrypt from 'bcrypt';
import { CreateTransacDto } from 'src/transac/dto/create-transac.dto';

@Controller('transaction')
export class AuthController {
  constructor(
    private auth: AuthService,
    ) {}

  @Post('auth')
  async login(@Body() loginDTO: Pick<CreateTransacDto, 'email' | 'password'>){
    return await this.auth.login(loginDTO);
  }

  @Get('auth/login')
  async getLogin(){
    
  }
}
