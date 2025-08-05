import { Injectable, NotFoundException } from '@nestjs/common';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';
import { Account } from './entities/account.entity';
import { CreateAccountDto, UpdateAccountDto } from './dto/account.dto';
import { JournalEntry, JournalEntryLine } from './entities/journal-entry.entity';
import { CreateJournalEntryDto, UpdateJournalEntryDto } from './dto/journal-entry.dto';
import { Ledger } from './entities/ledger.entity';
import { CreateLedgerDto, UpdateLedgerDto } from './dto/ledger.dto';
import { AuditLog } from './entities/audit-log.entity';
import { CreateAuditLogDto } from './dto/audit-log.dto';

@Injectable()
export class AccountingService {
  private transactions: Transaction[] = [
    { id: 1, description: 'Initial Balance', amount: 10000, type: 'credit' },
    { id: 2, description: 'Office Supplies', amount: 200, type: 'debit' },
  ];
  private nextTxId = 3;
  private accounts: Account[] = [];
  private nextAccountId = 1;
  private journalEntries: JournalEntry[] = [];
  private nextJournalId = 1;
  private ledgers: Ledger[] = [];
  private auditLogs: AuditLog[] = [];

  getHello() {
    return { message: 'Welcome to Accounting module!' };
  }

  findAll(): Transaction[] {
    return this.transactions;
  }

  findOne(id: number): Transaction {
    const tx = this.transactions.find(t => t.id === id);
    if (!tx) throw new NotFoundException('Transaction not found');
    return tx;
  }

  create(dto: CreateTransactionDto): Transaction {
    const tx: Transaction = { id: this.nextTxId++, ...dto };
    this.transactions.push(tx);
    return tx;
  }

  update(id: number, dto: UpdateTransactionDto): Transaction {
    const tx = this.findOne(id);
    Object.assign(tx, dto);
    return tx;
  }

  remove(id: number): void {
    const idx = this.transactions.findIndex(t => t.id === id);
    if (idx === -1) throw new NotFoundException('Transaction not found');
    this.transactions.splice(idx, 1);
  }

  // Chart of Accounts
  createAccount(dto: CreateAccountDto): Account {
    const acc: Account = { id: this.nextAccountId++, ...dto };
    this.accounts.push(acc);
    return acc;
  }
  getAccounts(): Account[] {
    return this.accounts;
  }
  updateAccount(id: number, dto: UpdateAccountDto): Account {
    const acc = this.accounts.find(a => a.id === id);
    if (!acc) throw new NotFoundException('Account not found');
    Object.assign(acc, dto);
    return acc;
  }
  removeAccount(id: number): void {
    const idx = this.accounts.findIndex(a => a.id === id);
    if (idx === -1) throw new NotFoundException('Account not found');
    this.accounts.splice(idx, 1);
  }

  // Journal Entries
  createJournalEntry(dto: CreateJournalEntryDto): JournalEntry {
    const entry: JournalEntry = {
      id: this.nextJournalId++,
      date: dto.date,
      description: dto.description,
      lines: dto.lines.map(l => ({ ...l })),
      createdBy: 'system',
    };
    this.journalEntries.push(entry);
    return entry;
  }
  getJournalEntries(): JournalEntry[] {
    return this.journalEntries;
  }
  updateJournalEntry(id: number, dto: UpdateJournalEntryDto): JournalEntry {
    const entry = this.journalEntries.find(e => e.id === id);
    if (!entry) throw new NotFoundException('Journal Entry not found');
    Object.assign(entry, dto);
    return entry;
  }
  removeJournalEntry(id: number): void {
    const idx = this.journalEntries.findIndex(e => e.id === id);
    if (idx === -1) throw new NotFoundException('Journal Entry not found');
    this.journalEntries.splice(idx, 1);
  }

  // Ledgers
  createLedger(dto: CreateLedgerDto): Ledger {
    const ledger: Ledger = { id: this.ledgers.length + 1, ...dto };
    this.ledgers.push(ledger);
    return ledger;
  }
  getLedgers(): Ledger[] {
    return this.ledgers;
  }
  updateLedger(id: number, dto: UpdateLedgerDto): Ledger {
    const ledger = this.ledgers.find(l => l.id === id);
    if (!ledger) throw new NotFoundException('Ledger not found');
    Object.assign(ledger, dto);
    return ledger;
  }
  removeLedger(id: number): void {
    const idx = this.ledgers.findIndex(l => l.id === id);
    if (idx === -1) throw new NotFoundException('Ledger not found');
    this.ledgers.splice(idx, 1);
  }

  // Audit Log
  createAuditLog(dto: CreateAuditLogDto): AuditLog {
    const log: AuditLog = {
      id: this.auditLogs.length + 1,
      ...dto,
      timestamp: new Date().toISOString(),
    };
    this.auditLogs.push(log);
    return log;
  }
  getAuditLogs(): AuditLog[] {
    return this.auditLogs;
  }

  // Financial Reports (stub)
  getBalanceSheet(): any {
    // Aggregate accounts by type
    return {
      assets: this.accounts.filter(a => a.type === 'asset'),
      liabilities: this.accounts.filter(a => a.type === 'liability'),
      equity: this.accounts.filter(a => a.type === 'equity'),
    };
  }
  getIncomeStatement(): any {
    return {
      income: this.accounts.filter(a => a.type === 'income'),
      expenses: this.accounts.filter(a => a.type === 'expense'),
    };
  }
  getTrialBalance(): any {
    // List all accounts with balances
    return this.accounts.map(a => ({
      ...a,
      balance: 0, // stub
    }));
  }
  }
}
