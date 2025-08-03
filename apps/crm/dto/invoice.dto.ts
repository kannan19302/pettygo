export class InvoiceDto {
  id?: number;
  subject: string;
  accountId?: number;
  total: number;
  status?: string;
  createdAt?: Date;
}
