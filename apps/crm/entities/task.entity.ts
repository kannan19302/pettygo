export class Task {
  id: number;
  subject: string;
  dueDate?: Date;
  status?: string;
  ownerId?: number;
  relatedTo?: string;
  createdAt: Date;
}
