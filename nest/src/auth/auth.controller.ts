import { BadRequestException, Body, Controller, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post, Get } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import { TransacService } from 'src/transac/transac.service';
import * as bcrypt from 'bcrypt';
import { CreateTransacDto } from 'src/transac/dto/create-transac.dto';
import { Request, Response } from 'express';

@Controller('transaction')
export class AuthController {
  constructor(
    private auth: AuthService,
    private transac: TransacService,
    private jwt: JwtService
    ) {}

  @Post('auth')
  async login(
    @Body() loginDTO: Pick<CreateTransacDto, 'email' | 'password'>,
    @Res({ passthrough: true }) res: Response
  ){
    const { email } = loginDTO
    const user = await this.transac.findOne({ email });

    if(!user){
      throw new UnauthorizedException('Unauthorized!')
    }

    if(!await bcrypt.compare(loginDTO.password, user.password)){
      throw new UnauthorizedException('Unauthorized!')
    }

    const jwt = this.jwt.signAsync({ id: user.id });
    res.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'logged with successfully!'
    }
  }

  @Get('auth/login')
  async getLogin(@Req() req: Request){
    try{
      const cookie = req.cookies['jwt'];

      const data = await this.jwt.verifyAsync(cookie);

    } catch(e){
      throw new BadRequestException()
    }
  }
}
