import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto, UpdatePurchaseDto } from './dto/purchase.dto';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  getHello() {
    return this.purchaseService.getHello();
  }

  @Get('purchases')
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get('purchases/:id')
  findOne(@Param('id') id: string) {
    return this.purchaseService.findOne(Number(id));
  }

  @Post('purchases')
  create(@Body() dto: CreatePurchaseDto) {
    return this.purchaseService.create(dto);
  }

  @Patch('purchases/:id')
  update(@Param('id') id: string, @Body() dto: UpdatePurchaseDto) {
    return this.purchaseService.update(Number(id), dto);
  }

  @Delete('purchases/:id')
  remove(@Param('id') id: string) {
    this.purchaseService.remove(Number(id));
    return { success: true };
  }
}
