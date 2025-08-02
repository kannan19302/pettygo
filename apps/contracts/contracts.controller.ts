import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ContractsService, Contract } from './contracts.service';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Get()
  getHello() {
    return this.contractsService.getHello();
  }

  @Get('all')
  findAll() {
    return this.contractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractsService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: Omit<Contract, 'id'>) {
    return this.contractsService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<Omit<Contract, 'id'>>) {
    return this.contractsService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.contractsService.remove(Number(id));
    return { success: true };
  }
}
