import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { CreateAppDto, UpdateAppDto } from './dto/app.dto';

@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Get()
  getHello() {
    return this.marketplaceService.getHello();
  }

  @Get('apps')
  findAll() {
    return this.marketplaceService.findAll();
  }

  @Get('apps/:id')
  findOne(@Param('id') id: string) {
    return this.marketplaceService.findOne(Number(id));
  }

  @Post('apps')
  create(@Body() dto: CreateAppDto) {
    return this.marketplaceService.create(dto);
  }

  @Patch('apps/:id')
  update(@Param('id') id: string, @Body() dto: UpdateAppDto) {
    return this.marketplaceService.update(Number(id), dto);
  }

  @Delete('apps/:id')
  remove(@Param('id') id: string) {
    this.marketplaceService.remove(Number(id));
    return { success: true };
  }
}
