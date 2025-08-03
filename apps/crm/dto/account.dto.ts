
export class CreateAccountDto {
  constructor(
    public name: string,
    public industry?: string,
    public website?: string,
    public phone?: string,
    public ownerId?: number
  ) {}
}

export class UpdateAccountDto {
  constructor(
    public name?: string,
    public industry?: string,
    public website?: string,
    public phone?: string,
    public ownerId?: number
  ) {}
}
