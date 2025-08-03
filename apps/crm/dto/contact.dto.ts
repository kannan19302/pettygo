
export class CreateContactDto {
  constructor(
    public firstName: string,
    public lastName: string,
    public email?: string,
    public phone?: string,
    public accountId?: number,
    public ownerId?: number
  ) {}
}

export class UpdateContactDto {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public phone?: string,
    public accountId?: number,
    public ownerId?: number
  ) {}
}
