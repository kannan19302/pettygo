export class CRMCase {
  id: number;
  subject: string;
  description?: string;
  status?: string;
  contactId?: number;
  accountId?: number;
  createdAt: Date;
}
