export class CreateAccountDto {
  code: string;
  name: string;
  type: 'asset' | 'liability' | 'equity' | 'income' | 'expense';
  currency: string;
  parentId?: number;
}

export class UpdateAccountDto {
  name?: string;
  currency?: string;
  parentId?: number;
}
