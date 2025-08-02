import { Injectable, NotFoundException } from '@nestjs/common';
import { Report } from './entities/report.entity';
import { CreateReportDto, UpdateReportDto } from './dto/report.dto';

@Injectable()
export class AnalyticsService {
  private reports: Report[] = [
    { id: 1, title: 'Sales Q1', type: 'sales', value: 12000 },
    { id: 2, title: 'Inventory', type: 'inventory', value: 500 },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Analytics module!' };
  }

  findAll(): Report[] {
    return this.reports;
  }

  findOne(id: number): Report {
    const report = this.reports.find(r => r.id === id);
    if (!report) throw new NotFoundException('Report not found');
    return report;
  }

  create(dto: CreateReportDto): Report {
    const report: Report = { id: this.nextId++, ...dto };
    this.reports.push(report);
    return report;
  }

  update(id: number, dto: UpdateReportDto): Report {
    const report = this.findOne(id);
    Object.assign(report, dto);
    return report;
  }

  remove(id: number): void {
    const idx = this.reports.findIndex(r => r.id === id);
    if (idx === -1) throw new NotFoundException('Report not found');
    this.reports.splice(idx, 1);
  }
}
