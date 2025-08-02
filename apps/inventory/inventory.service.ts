import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { CreateItemDto, UpdateItemDto } from './dto/item.dto';

@Injectable()
export class InventoryService {
  private items: Item[] = [
    { id: 1, name: 'Laptop', sku: 'LAP-001', quantity: 10 },
    { id: 2, name: 'Monitor', sku: 'MON-002', quantity: 25 },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Inventory module!' };
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    const item = this.items.find(i => i.id === id);
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  create(dto: CreateItemDto): Item {
    const item: Item = { id: this.nextId++, ...dto };
    this.items.push(item);
    return item;
  }

  update(id: number, dto: UpdateItemDto): Item {
    const item = this.findOne(id);
    Object.assign(item, dto);
    return item;
  }

  remove(id: number): void {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) throw new NotFoundException('Item not found');
    this.items.splice(idx, 1);
  }
}
