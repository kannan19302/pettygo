export class Account {
  id!: number;
  code!: string;
  name!: string;
  type!: 'asset' | 'liability' | 'equity' | 'income' | 'expense';
  currency!: string;
  parentId?: number;
}
