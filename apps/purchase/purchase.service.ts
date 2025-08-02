import { Injectable, NotFoundException } from '@nestjs/common';
import { Purchase } from './entities/purchase.entity';
import { CreatePurchaseDto, UpdatePurchaseDto } from './dto/purchase.dto';

@Injectable()
export class PurchaseService {
  private purchases: Purchase[] = [
    { id: 1, vendor: 'Vendor A', amount: 500, status: 'Pending' },
    { id: 2, vendor: 'Vendor B', amount: 1200, status: 'Completed' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Purchase module!' };
  }

  findAll(): Purchase[] {
    return this.purchases;
  }

  findOne(id: number): Purchase {
    const purchase = this.purchases.find(p => p.id === id);
    if (!purchase) throw new NotFoundException('Purchase not found');
    return purchase;
  }

  create(dto: CreatePurchaseDto): Purchase {
    const purchase: Purchase = { id: this.nextId++, ...dto };
    this.purchases.push(purchase);
    return purchase;
  }

  update(id: number, dto: UpdatePurchaseDto): Purchase {
    const purchase = this.findOne(id);
    Object.assign(purchase, dto);
    return purchase;
  }

  remove(id: number): void {
    const idx = this.purchases.findIndex(p => p.id === id);
    if (idx === -1) throw new NotFoundException('Purchase not found');
    this.purchases.splice(idx, 1);
  }
}
