export class CreateJournalEntryDto {
  date: string;
  description: string;
  lines: {
    accountId: number;
    debit: number;
    credit: number;
    currency: string;
  }[];
}

export class UpdateJournalEntryDto {
  description?: string;
  lines?: {
    accountId: number;
    debit: number;
    credit: number;
    currency: string;
  }[];
}
