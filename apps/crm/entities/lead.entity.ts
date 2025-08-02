export class Lead {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public company?: string,
    public phone?: string,
    public status?: string,
    public source?: string,
    public ownerId?: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public notes: Note[] = [],
    public activities: Activity[] = [],
  ) {}
}

export class Note {
  constructor(
    public id: number,
    public leadId: number,
    public content: string,
    public createdAt: Date = new Date(),
    public authorId: number = 0,
  ) {}
}

export class Activity {
  constructor(
    public id: number,
    public leadId: number,
    public type: 'call' | 'meeting' | 'task' | 'email',
    public subject: string,
    public description?: string,
    public dueDate?: Date,
    public completed: boolean = false,
    public createdAt: Date = new Date(),
    public ownerId: number = 0,
  ) {}
}
