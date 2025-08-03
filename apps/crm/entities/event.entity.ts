export class Event {
  id: number;
  subject: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  relatedTo?: string;
  createdAt: Date;
}
