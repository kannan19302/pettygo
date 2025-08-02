export class Deal {
  constructor(
    public id: number,
    public name: string,
    public accountId: number,
    public value: number,
    public stage: string,
    public closeDate?: Date,
    public ownerId?: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
