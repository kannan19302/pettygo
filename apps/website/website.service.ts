import { Injectable, NotFoundException } from '@nestjs/common';

export interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
  status: string;
}

@Injectable()
export class WebsiteService {
  private pages: Page[] = [
    { id: 1, title: 'Home', slug: 'home', content: 'Welcome to PettyGo!', status: 'Published' },
    { id: 2, title: 'About', slug: 'about', content: 'About PettyGo', status: 'Draft' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Website module!' };
  }

  findAll(): Page[] {
    return this.pages;
  }

  findOne(id: number): Page {
    const page = this.pages.find(p => p.id === id);
    if (!page) throw new NotFoundException('Page not found');
    return page;
  }

  create(dto: Omit<Page, 'id'>): Page {
    const page: Page = { id: this.nextId++, ...dto };
    this.pages.push(page);
    return page;
  }

  update(id: number, dto: Partial<Omit<Page, 'id'>>): Page {
    const page = this.findOne(id);
    Object.assign(page, dto);
    return page;
  }

  remove(id: number): void {
    const idx = this.pages.findIndex(p => p.id === id);
    if (idx === -1) throw new NotFoundException('Page not found');
    this.pages.splice(idx, 1);
  }
}
