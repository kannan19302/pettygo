import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

@Injectable()
export class EcommerceService {
  private products: Product[] = [
    { id: 1, name: 'T-Shirt', price: 20, stock: 100, category: 'Apparel' },
    { id: 2, name: 'Coffee Mug', price: 10, stock: 50, category: 'Accessories' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Ecommerce module!' };
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find(p => p.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  create(dto: Omit<Product, 'id'>): Product {
    const product: Product = { id: this.nextId++, ...dto };
    this.products.push(product);
    return product;
  }

  update(id: number, dto: Partial<Omit<Product, 'id'>>): Product {
    const product = this.findOne(id);
    Object.assign(product, dto);
    return product;
  }

  remove(id: number): void {
    const idx = this.products.findIndex(p => p.id === id);
    if (idx === -1) throw new NotFoundException('Product not found');
    this.products.splice(idx, 1);
  }
}
