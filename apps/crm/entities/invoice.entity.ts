export class Invoice {
  id: number;
  subject: string;
  accountId?: number;
  total: number;
  status?: string;
  createdAt: Date;
}
