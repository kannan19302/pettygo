export class CreateTransactionDto {
  description: string;
  amount: number;
  type: 'credit' | 'debit';
}

export class UpdateTransactionDto {
  description?: string;
  amount?: number;
  type?: 'credit' | 'debit';
}
