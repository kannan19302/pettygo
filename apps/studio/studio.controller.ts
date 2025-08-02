import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudioService } from './studio.service';
import { CreateAutomationDto, UpdateAutomationDto } from './dto/automation.dto';

@Controller('studio')
export class StudioController {
  constructor(private readonly studioService: StudioService) {}

  @Get()
  getHello() {
    return this.studioService.getHello();
  }

  @Get('automations')
  findAll() {
    return this.studioService.findAll();
  }

  @Get('automations/:id')
  findOne(@Param('id') id: string) {
    return this.studioService.findOne(Number(id));
  }

  @Post('automations')
  create(@Body() dto: CreateAutomationDto) {
    return this.studioService.create(dto);
  }

  @Patch('automations/:id')
  update(@Param('id') id: string, @Body() dto: UpdateAutomationDto) {
    return this.studioService.update(Number(id), dto);
  }

  @Delete('automations/:id')
  remove(@Param('id') id: string) {
    this.studioService.remove(Number(id));
    return { success: true };
  }
}
