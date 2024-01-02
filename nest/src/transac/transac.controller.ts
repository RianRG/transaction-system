import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransacService } from './transac.service';
import { CreateTransacDto } from './dto/create-transac.dto';
import { UpdateTransacDto } from './dto/update-transac.dto';

@Controller('transac')
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
  findOne(@Param('id') id: string) {
    return this.transacService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransacDto: UpdateTransacDto) {
    return this.transacService.update(+id, updateTransacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transacService.remove(+id);
  }
}
