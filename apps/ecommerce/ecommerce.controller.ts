import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { EcommerceService, Product } from './ecommerce.service';

@Controller('ecommerce')
export class EcommerceController {
  constructor(private readonly ecommerceService: EcommerceService) {}

  @Get()
  getHello() {
    return this.ecommerceService.getHello();
  }

  @Get('products')
  findAll() {
    return this.ecommerceService.findAll();
  }

  @Get('products/:id')
  findOne(@Param('id') id: string) {
    return this.ecommerceService.findOne(Number(id));
  }

  @Post('products')
  create(@Body() dto: Omit<Product, 'id'>) {
    return this.ecommerceService.create(dto);
  }

  @Patch('products/:id')
  update(@Param('id') id: string, @Body() dto: Partial<Omit<Product, 'id'>>) {
    return this.ecommerceService.update(Number(id), dto);
  }

  @Delete('products/:id')
  remove(@Param('id') id: string) {
    this.ecommerceService.remove(Number(id));
    return { success: true };
  }
}
