export class CreateLedgerDto {
  accountId: number;
  period: string;
  openingBalance: number;
  closingBalance: number;
  currency: string;
}

export class UpdateLedgerDto {
  closingBalance?: number;
  currency?: string;
}
