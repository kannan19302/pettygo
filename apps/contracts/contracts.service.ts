import { Injectable, NotFoundException } from '@nestjs/common';

export interface Contract {
  id: number;
  title: string;
  client: string;
  value: number;
  status: string;
}

@Injectable()
export class ContractsService {
  private contracts: Contract[] = [
    { id: 1, title: 'Annual Support', client: 'Acme Corp', value: 10000, status: 'Active' },
    { id: 2, title: 'Website Redesign', client: 'Beta LLC', value: 5000, status: 'Draft' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Contracts module!' };
  }

  findAll(): Contract[] {
    return this.contracts;
  }

  findOne(id: number): Contract {
    const contract = this.contracts.find(c => c.id === id);
    if (!contract) throw new NotFoundException('Contract not found');
    return contract;
  }

  create(dto: Omit<Contract, 'id'>): Contract {
    const contract: Contract = { id: this.nextId++, ...dto };
    this.contracts.push(contract);
    return contract;
  }

  update(id: number, dto: Partial<Omit<Contract, 'id'>>): Contract {
    const contract = this.findOne(id);
    Object.assign(contract, dto);
    return contract;
  }

  remove(id: number): void {
    const idx = this.contracts.findIndex(c => c.id === id);
    if (idx === -1) throw new NotFoundException('Contract not found');
    this.contracts.splice(idx, 1);
  }
}
