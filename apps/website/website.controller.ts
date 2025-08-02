import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { WebsiteService, Page } from './website.service';

@Controller('website')
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}

  @Get()
  getHello() {
    return this.websiteService.getHello();
  }

  @Get('pages')
  findAll() {
    return this.websiteService.findAll();
  }

  @Get('pages/:id')
  findOne(@Param('id') id: string) {
    return this.websiteService.findOne(Number(id));
  }

  @Post('pages')
  create(@Body() dto: Omit<Page, 'id'>) {
    return this.websiteService.create(dto);
  }

  @Patch('pages/:id')
  update(@Param('id') id: string, @Body() dto: Partial<Omit<Page, 'id'>>) {
    return this.websiteService.update(Number(id), dto);
  }

  @Delete('pages/:id')
  remove(@Param('id') id: string) {
    this.websiteService.remove(Number(id));
    return { success: true };
  }
}
