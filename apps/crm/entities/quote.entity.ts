export class Quote {
  id: number;
  subject: string;
  dealId?: number;
  accountId?: number;
  total: number;
  status?: string;
  createdAt: Date;
}
