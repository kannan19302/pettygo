import { Injectable, NotFoundException } from '@nestjs/common';
import { Site } from './entities/site.entity';
import { CreateSiteDto, UpdateSiteDto } from './dto/site.dto';

@Injectable()
export class WebsiteBuilderService {
  private sites: Site[] = [
    { id: 1, name: 'Main Site', url: 'https://pettygo.com', status: 'Active' },
    { id: 2, name: 'Landing Page', url: 'https://pettygo.com/landing', status: 'Draft' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Website Builder module!' };
  }

  findAll(): Site[] {
    return this.sites;
  }

  findOne(id: number): Site {
    const site = this.sites.find(s => s.id === id);
    if (!site) throw new NotFoundException('Site not found');
    return site;
  }

  create(dto: CreateSiteDto): Site {
    const site: Site = { id: this.nextId++, ...dto };
    this.sites.push(site);
    return site;
  }

  update(id: number, dto: UpdateSiteDto): Site {
    const site = this.findOne(id);
    Object.assign(site, dto);
    return site;
  }

  remove(id: number): void {
    const idx = this.sites.findIndex(s => s.id === id);
    if (idx === -1) throw new NotFoundException('Site not found');
    this.sites.splice(idx, 1);
  }
}
