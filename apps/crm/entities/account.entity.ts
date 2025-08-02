export class Account {
  constructor(
    public id: number,
    public name: string,
    public industry?: string,
    public website?: string,
    public phone?: string,
    public ownerId?: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
