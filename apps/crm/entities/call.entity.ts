export class Call {
  id: number;
  subject: string;
  phone?: string;
  callType?: string;
  duration?: number;
  status?: string;
  relatedTo?: string;
  createdAt: Date;
}
