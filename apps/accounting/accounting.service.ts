import { Injectable, NotFoundException } from '@nestjs/common';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';

@Injectable()
export class AccountingService {
  private transactions: Transaction[] = [
    { id: 1, description: 'Initial Balance', amount: 10000, type: 'credit' },
    { id: 2, description: 'Office Supplies', amount: 200, type: 'debit' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Accounting module!' };
  }

  findAll(): Transaction[] {
    return this.transactions;
  }

  findOne(id: number): Transaction {
    const tx = this.transactions.find(t => t.id === id);
    if (!tx) throw new NotFoundException('Transaction not found');
    return tx;
  }

  create(dto: CreateTransactionDto): Transaction {
    const tx: Transaction = { id: this.nextId++, ...dto };
    this.transactions.push(tx);
    return tx;
  }

  update(id: number, dto: UpdateTransactionDto): Transaction {
    const tx = this.findOne(id);
    Object.assign(tx, dto);
    return tx;
  }

  remove(id: number): void {
    const idx = this.transactions.findIndex(t => t.id === id);
    if (idx === -1) throw new NotFoundException('Transaction not found');
    this.transactions.splice(idx, 1);
  }
}
