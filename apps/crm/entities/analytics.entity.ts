export class AnalyticsEvent {
  constructor(
    public id: number,
    public type: string,
    public entityId: number,
    public entityType: string,
    public data: any = {},
    public createdAt: Date = new Date(),
  ) {}
}
