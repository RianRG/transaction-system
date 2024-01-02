import { IsEmail, IsEnum, IsNotEmpty, Min } from 'class-validator';
import { Types } from '../entities/transac.entity';

export class CreateTransacDto {
  @IsNotEmpty()
  transaction: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @Min(0)
  amount: number;

  @IsNotEmpty()
  @IsEnum(Types)
  type: Types;
}

