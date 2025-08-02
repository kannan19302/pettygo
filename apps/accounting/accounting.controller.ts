import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';

@Controller('accounting')
export class AccountingController {
  constructor(private readonly accountingService: AccountingService) {}

  @Get()
  getHello() {
    return this.accountingService.getHello();
  }

  @Get('transactions')
  findAll() {
    return this.accountingService.findAll();
  }

  @Get('transactions/:id')
  findOne(@Param('id') id: string) {
    return this.accountingService.findOne(Number(id));
  }

  @Post('transactions')
  create(@Body() dto: CreateTransactionDto) {
    return this.accountingService.create(dto);
  }

  @Patch('transactions/:id')
  update(@Param('id') id: string, @Body() dto: UpdateTransactionDto) {
    return this.accountingService.update(Number(id), dto);
  }

  @Delete('transactions/:id')
  remove(@Param('id') id: string) {
    this.accountingService.remove(Number(id));
    return { success: true };
  }
}
