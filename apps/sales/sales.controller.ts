import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateOrderDto, UpdateOrderDto } from './dto/order.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  getHello() {
    return this.salesService.getHello();
  }

  @Get('orders')
  findAll() {
    return this.salesService.findAll();
  }

  @Get('orders/:id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(Number(id));
  }

  @Post('orders')
  create(@Body() dto: CreateOrderDto) {
    return this.salesService.create(dto);
  }

  @Patch('orders/:id')
  update(@Param('id') id: string, @Body() dto: UpdateOrderDto) {
    return this.salesService.update(Number(id), dto);
  }

  @Delete('orders/:id')
  remove(@Param('id') id: string) {
    this.salesService.remove(Number(id));
    return { success: true };
  }
}
