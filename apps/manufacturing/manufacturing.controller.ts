import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ManufacturingService } from './manufacturing.service';
import { CreateJobDto, UpdateJobDto } from './dto/job.dto';

@Controller('manufacturing')
export class ManufacturingController {
  constructor(private readonly manufacturingService: ManufacturingService) {}

  @Get()
  getHello() {
    return this.manufacturingService.getHello();
  }

  @Get('jobs')
  findAll() {
    return this.manufacturingService.findAll();
  }

  @Get('jobs/:id')
  findOne(@Param('id') id: string) {
    return this.manufacturingService.findOne(Number(id));
  }

  @Post('jobs')
  create(@Body() dto: CreateJobDto) {
    return this.manufacturingService.create(dto);
  }

  @Patch('jobs/:id')
  update(@Param('id') id: string, @Body() dto: UpdateJobDto) {
    return this.manufacturingService.update(Number(id), dto);
  }

  @Delete('jobs/:id')
  remove(@Param('id') id: string) {
    this.manufacturingService.remove(Number(id));
    return { success: true };
  }
}
