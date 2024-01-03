import { Injectable } from '@nestjs/common';
import { CreateTransacDto } from './dto/create-transac.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transac } from './entities/transac.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class TransacService {

  constructor(
    @InjectRepository(Transac)
    private transacRepository: Repository<Transac>
  ){}

  async create(createTransacDto: CreateTransacDto) {
    if(createTransacDto.type==='debit') createTransacDto.amount *= -1;

    createTransacDto.password = bcrypt.hashSync(createTransacDto.password, 10)

    const user = await this.transacRepository.save(createTransacDto);

    delete user.password;
    return user;
  }

  findAll() {
    return this.transacRepository.find({ select: [
      'id',
      'transaction',
      'email',
      'type',
      'amount',
      'created_at',
    ] });
  }

  async findOne(data: any): Promise<Transac> {
    return await this.transacRepository.findOneByOrFail(data);
  }

  remove(id: string) {
    return this.transacRepository.delete(id);
  }
}
