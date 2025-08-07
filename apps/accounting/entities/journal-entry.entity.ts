export class JournalEntry {
  id!: number;
  date!: string;
  description!: string;
  lines!: JournalEntryLine[];
  createdBy!: string;
}

export class JournalEntryLine {
  accountId!: number;
  debit!: number;
  credit!: number;
  currency!: string;
}
