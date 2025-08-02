export class Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
}
