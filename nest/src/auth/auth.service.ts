import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TransacService } from 'src/transac/transac.service';
import * as bcrypt from 'bcrypt';
import { CreateTransacDto } from 'src/transac/dto/create-transac.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private transac: TransacService
  ){}

  async login(loginDTO: Pick<CreateTransacDto, 'email' | 'password'>){

    const { email } = loginDTO;

    const user = await this.transac.findOne({ email });

    if(!user){
      throw new Error('Unauthorized!');
    }

    if(!await bcrypt.compare(loginDTO.password, user.password)){
      throw new Error('Invalid credentials!');
    }

    const jwt = this.jwt.signAsync({ id: user.id });
    return jwt;
  }
}
