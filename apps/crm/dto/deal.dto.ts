
export class CreateDealDto {
  constructor(
    public name: string,
    public stage: string,
    public amount?: number,
    public closeDate?: Date,
    public accountId?: number,
    public contactId?: number,
    public ownerId?: number
  ) {}
}

export class UpdateDealDto {
  constructor(
    public name?: string,
    public stage?: string,
    public amount?: number,
    public closeDate?: Date,
    public accountId?: number,
    public contactId?: number,
    public ownerId?: number
  ) {}
}
