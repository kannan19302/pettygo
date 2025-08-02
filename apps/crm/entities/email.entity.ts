export class EmailLog {
  constructor(
    public id: number,
    public leadId?: number,
    public contactId?: number,
    public subject: string = '',
    public body: string = '',
    public sentAt: Date = new Date(),
    public sender: string = '',
    public recipients: string[] = [],
  ) {}
}
