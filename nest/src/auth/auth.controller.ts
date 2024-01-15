import { BadRequestException, Body, Controller, Req, Res, UnauthorizedException } from '@nestjs/common';
import { Post, Get } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt';
import { TransacService } from '../transac/transac.service';
import * as bcrypt from 'bcrypt';
import { CreateTransacDto } from 'src/transac/dto/create-transac.dto';
import { Request, Response } from 'express';

@Controller('transaction')
export class AuthController {
  constructor(
    private transac: TransacService,
    private jwtService: JwtService
    ) {}

  @Post('auth')
  async login(
    @Body() loginDTO: Pick<CreateTransacDto, 'email' | 'password'>,
    @Res({ passthrough: true }) res: Response
  ){
    const { email } = loginDTO
    const user = await this.transac.findOne({ email });

    if(!user){
      throw new BadRequestException('Unauthorized!')
    }

    if(!await bcrypt.compare(loginDTO.password, user.password)){
      throw new BadRequestException('Unauthorized!')
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });
    res.cookie('jwt', jwt, { 
      httpOnly: true,
      sameSite: 'none',
      secure: true
    });
    return {
      message: 'logged with successfully!'
    }
  }

  @Get('auth/login')
  async getLogin(@Req() req: Request){
    try{
      const cookie = req.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);

      if(!data){
        throw new UnauthorizedException();
      }

      const user = await this.transac.findOne({ id: data.id });
      const { password, ...results } = user;
      return results;
    } catch(e){
      throw new Error(e);
    }
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response){
    res.clearCookie('jwt');

    return {
      message: 'success!'
    }
  }
}
