
export class CreateActivityDto {
  constructor(
    public type: string,
    public subject: string,
    public dueDate?: Date,
    public status?: string,
    public ownerId?: number,
    public dealId?: number,
    public contactId?: number
  ) {}
}

export class UpdateActivityDto {
  constructor(
    public type?: string,
    public subject?: string,
    public dueDate?: Date,
    public status?: string,
    public ownerId?: number,
    public dealId?: number,
    public contactId?: number
  ) {}
}
