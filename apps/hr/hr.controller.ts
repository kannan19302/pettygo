import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { HrService } from './hr.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';

@Controller('hr')
export class HrController {
  constructor(private readonly hrService: HrService) {}

  @Get()
  getHello() {
    return this.hrService.getHello();
  }

  @Get('employees')
  findAll() {
    return this.hrService.findAll();
  }

  @Get('employees/:id')
  findOne(@Param('id') id: string) {
    return this.hrService.findOne(Number(id));
  }

  @Post('employees')
  create(@Body() dto: CreateEmployeeDto) {
    return this.hrService.create(dto);
  }

  @Patch('employees/:id')
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    return this.hrService.update(Number(id), dto);
  }

  @Delete('employees/:id')
  remove(@Param('id') id: string) {
    this.hrService.remove(Number(id));
    return { success: true };
  }
}
