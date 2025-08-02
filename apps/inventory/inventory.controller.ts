import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateItemDto, UpdateItemDto } from './dto/item.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  getHello() {
    return this.inventoryService.getHello();
  }

  @Get('items')
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get('items/:id')
  findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(Number(id));
  }

  @Post('items')
  create(@Body() dto: CreateItemDto) {
    return this.inventoryService.create(dto);
  }

  @Patch('items/:id')
  update(@Param('id') id: string, @Body() dto: UpdateItemDto) {
    return this.inventoryService.update(Number(id), dto);
  }

  @Delete('items/:id')
  remove(@Param('id') id: string) {
    this.inventoryService.remove(Number(id));
    return { success: true };
  }
}
