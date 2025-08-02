import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from './dto/order.dto';

@Injectable()
export class SalesService {
  private orders: Order[] = [
    { id: 1, customer: 'Acme Corp', amount: 1200, status: 'Pending' },
    { id: 2, customer: 'Beta LLC', amount: 800, status: 'Completed' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Sales module!' };
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: number): Order {
    const order = this.orders.find(o => o.id === id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  create(dto: CreateOrderDto): Order {
    const order: Order = { id: this.nextId++, ...dto };
    this.orders.push(order);
    return order;
  }

  update(id: number, dto: UpdateOrderDto): Order {
    const order = this.findOne(id);
    Object.assign(order, dto);
    return order;
  }

  remove(id: number): void {
    const idx = this.orders.findIndex(o => o.id === id);
    if (idx === -1) throw new NotFoundException('Order not found');
    this.orders.splice(idx, 1);
  }
}
