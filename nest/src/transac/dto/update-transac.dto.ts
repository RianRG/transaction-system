import { PartialType } from '@nestjs/mapped-types';
import { CreateTransacDto } from './create-transac.dto';

export class UpdateTransacDto extends PartialType(CreateTransacDto) {}
