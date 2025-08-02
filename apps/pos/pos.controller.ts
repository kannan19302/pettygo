import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PosService } from './pos.service';
import { CreateSaleDto, UpdateSaleDto } from './dto/sale.dto';

@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}

  @Get()
  getHello() {
    return this.posService.getHello();
  }

  @Get('sales')
  findAll() {
    return this.posService.findAll();
  }

  @Get('sales/:id')
  findOne(@Param('id') id: string) {
    return this.posService.findOne(Number(id));
  }

  @Post('sales')
  create(@Body() dto: CreateSaleDto) {
    return this.posService.create(dto);
  }

  @Patch('sales/:id')
  update(@Param('id') id: string, @Body() dto: UpdateSaleDto) {
    return this.posService.update(Number(id), dto);
  }

  @Delete('sales/:id')
  remove(@Param('id') id: string) {
    this.posService.remove(Number(id));
    return { success: true };
  }
}
