import { Injectable, NotFoundException } from '@nestjs/common';
import { App } from './entities/app.entity';
import { CreateAppDto, UpdateAppDto } from './dto/app.dto';

@Injectable()
export class MarketplaceService {
  private apps: App[] = [
    { id: 1, name: 'Slack Integration', description: 'Connect Slack', status: 'Active' },
    { id: 2, name: 'Mailchimp', description: 'Email Marketing', status: 'Inactive' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Marketplace module!' };
  }

  findAll(): App[] {
    return this.apps;
  }

  findOne(id: number): App {
    const app = this.apps.find(a => a.id === id);
    if (!app) throw new NotFoundException('App not found');
    return app;
  }

  create(dto: CreateAppDto): App {
    const app: App = { id: this.nextId++, ...dto };
    this.apps.push(app);
    return app;
  }

  update(id: number, dto: UpdateAppDto): App {
    const app = this.findOne(id);
    Object.assign(app, dto);
    return app;
  }

  remove(id: number): void {
    const idx = this.apps.findIndex(a => a.id === id);
    if (idx === -1) throw new NotFoundException('App not found');
    this.apps.splice(idx, 1);
  }
}
