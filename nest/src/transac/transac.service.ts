import { Injectable } from '@nestjs/common';
import { CreateTransacDto } from './dto/create-transac.dto';
import { UpdateTransacDto } from './dto/update-transac.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transac } from './entities/transac.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransacService {

  constructor(
    @InjectRepository(Transac)
    private transacRepository: Repository<Transac>
  ){}

  create(createTransacDto: CreateTransacDto) {

    if(createTransacDto.type==='debit') createTransacDto.amount *= -1;



    return this.transacRepository.save(createTransacDto);
  }

  findAll() {
    return `This action returns all transac`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transac`;
  }

  update(id: number, updateTransacDto: UpdateTransacDto) {
    return `This action updates a #${id} transac`;
  }

  remove(id: number) {
    return `This action removes a #${id} transac`;
  }
}
