import { Injectable, NotFoundException } from '@nestjs/common';
import { Sale } from './entities/sale.entity';
import { CreateSaleDto, UpdateSaleDto } from './dto/sale.dto';

@Injectable()
export class PosService {
  private sales: Sale[] = [
    { id: 1, product: 'Keyboard', quantity: 2, total: 60 },
    { id: 2, product: 'Mouse', quantity: 5, total: 75 },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to POS module!' };
  }

  findAll(): Sale[] {
    return this.sales;
  }

  findOne(id: number): Sale {
    const sale = this.sales.find(s => s.id === id);
    if (!sale) throw new NotFoundException('Sale not found');
    return sale;
  }

  create(dto: CreateSaleDto): Sale {
    const sale: Sale = { id: this.nextId++, ...dto };
    this.sales.push(sale);
    return sale;
  }

  update(id: number, dto: UpdateSaleDto): Sale {
    const sale = this.findOne(id);
    Object.assign(sale, dto);
    return sale;
  }

  remove(id: number): void {
    const idx = this.sales.findIndex(s => s.id === id);
    if (idx === -1) throw new NotFoundException('Sale not found');
    this.sales.splice(idx, 1);
  }
}
