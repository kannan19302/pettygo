import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';
import { CreateAccountDto, UpdateAccountDto } from './dto/account.dto';
import { CreateJournalEntryDto, UpdateJournalEntryDto } from './dto/journal-entry.dto';
import { CreateLedgerDto, UpdateLedgerDto } from './dto/ledger.dto';
import { CreateAuditLogDto } from './dto/audit-log.dto';

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

  // Chart of Accounts
  @Get('accounts')
  getAccounts() {
    return this.accountingService.getAccounts();
  }
  @Post('accounts')
  createAccount(@Body() dto: CreateAccountDto) {
    return this.accountingService.createAccount(dto);
  }
  @Patch('accounts/:id')
  updateAccount(@Param('id') id: string, @Body() dto: UpdateAccountDto) {
    return this.accountingService.updateAccount(Number(id), dto);
  }
  @Delete('accounts/:id')
  removeAccount(@Param('id') id: string) {
    this.accountingService.removeAccount(Number(id));
    return { success: true };
  }

  // Journal Entries
  @Get('journal-entries')
  getJournalEntries() {
    return this.accountingService.getJournalEntries();
  }
  @Post('journal-entries')
  createJournalEntry(@Body() dto: CreateJournalEntryDto) {
    return this.accountingService.createJournalEntry(dto);
  }
  @Patch('journal-entries/:id')
  updateJournalEntry(@Param('id') id: string, @Body() dto: UpdateJournalEntryDto) {
    return this.accountingService.updateJournalEntry(Number(id), dto);
  }
  @Delete('journal-entries/:id')
  removeJournalEntry(@Param('id') id: string) {
    this.accountingService.removeJournalEntry(Number(id));
    return { success: true };
  }

  // Ledgers
  @Get('ledgers')
  getLedgers() {
    return this.accountingService.getLedgers();
  }
  @Post('ledgers')
  createLedger(@Body() dto: CreateLedgerDto) {
    return this.accountingService.createLedger(dto);
  }
  @Patch('ledgers/:id')
  updateLedger(@Param('id') id: string, @Body() dto: UpdateLedgerDto) {
    return this.accountingService.updateLedger(Number(id), dto);
  }
  @Delete('ledgers/:id')
  removeLedger(@Param('id') id: string) {
    this.accountingService.removeLedger(Number(id));
    return { success: true };
  }

  // Audit Log
  @Get('audit-logs')
  getAuditLogs() {
    return this.accountingService.getAuditLogs();
  }
  @Post('audit-logs')
  createAuditLog(@Body() dto: CreateAuditLogDto) {
    return this.accountingService.createAuditLog(dto);
  }

  // Financial Reports
  @Get('reports/balance-sheet')
  getBalanceSheet() {
    return this.accountingService.getBalanceSheet();
  }
  @Get('reports/income-statement')
  getIncomeStatement() {
    return this.accountingService.getIncomeStatement();
  }
  @Get('reports/trial-balance')
  getTrialBalance() {
    return this.accountingService.getTrialBalance();
  }
}
