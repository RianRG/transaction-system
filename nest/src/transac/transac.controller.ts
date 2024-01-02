import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransacService } from './transac.service';
import { CreateTransacDto } from './dto/create-transac.dto';

@Controller('transaction')
export class TransacController {
  constructor(private readonly transacService: TransacService) {}

  @Post()
  create(@Body() createTransacDto: CreateTransacDto) {
    return this.transacService.create(createTransacDto);
  }

  @Get()
  findAll() {
    return this.transacService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.transacService.findOne({ id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transacService.remove(id);
  }
}
