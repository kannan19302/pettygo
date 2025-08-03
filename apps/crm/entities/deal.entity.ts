
export class Deal {
  id: number;
  name: string;
  stage: string;
  amount?: number;
  closeDate?: Date;
  accountId?: number;
  contactId?: number;
  ownerId?: number;
  createdAt: Date;
}
