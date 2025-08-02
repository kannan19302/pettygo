import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { WebsiteBuilderService } from './website-builder.service';
import { CreateSiteDto, UpdateSiteDto } from './dto/site.dto';

@Controller('website-builder')
export class WebsiteBuilderController {
  constructor(private readonly websiteBuilderService: WebsiteBuilderService) {}

  @Get()
  getHello() {
    return this.websiteBuilderService.getHello();
  }

  @Get('sites')
  findAll() {
    return this.websiteBuilderService.findAll();
  }

  @Get('sites/:id')
  findOne(@Param('id') id: string) {
    return this.websiteBuilderService.findOne(Number(id));
  }

  @Post('sites')
  create(@Body() dto: CreateSiteDto) {
    return this.websiteBuilderService.create(dto);
  }

  @Patch('sites/:id')
  update(@Param('id') id: string, @Body() dto: UpdateSiteDto) {
    return this.websiteBuilderService.update(Number(id), dto);
  }

  @Delete('sites/:id')
  remove(@Param('id') id: string) {
    this.websiteBuilderService.remove(Number(id));
    return { success: true };
  }
}
