export class Contact {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone?: string,
    public accountId?: number,
    public leadId?: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
