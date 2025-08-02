import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateReportDto, UpdateReportDto } from './dto/report.dto';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  getHello() {
    return this.analyticsService.getHello();
  }

  @Get('reports')
  findAll() {
    return this.analyticsService.findAll();
  }

  @Get('reports/:id')
  findOne(@Param('id') id: string) {
    return this.analyticsService.findOne(Number(id));
  }

  @Post('reports')
  create(@Body() dto: CreateReportDto) {
    return this.analyticsService.create(dto);
  }

  @Patch('reports/:id')
  update(@Param('id') id: string, @Body() dto: UpdateReportDto) {
    return this.analyticsService.update(Number(id), dto);
  }

  @Delete('reports/:id')
  remove(@Param('id') id: string) {
    this.analyticsService.remove(Number(id));
    return { success: true };
  }
}
