import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TransacService } from 'src/transac/transac.service';
import * as bcrypt from 'bcrypt';
import { CreateTransacDto } from 'src/transac/dto/create-transac.dto';

@Injectable()
export class AuthService {
  constructor(){}
}
