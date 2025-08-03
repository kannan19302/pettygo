
export class EmailDto {
  id?: number;
  subject: string;
  body: string;
  to: string;
  from: string;
  sentAt?: Date;
  relatedTo?: string;
  createdAt?: Date;
}
