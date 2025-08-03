
export class CreateEmailDto {
  constructor(
    public subject: string,
    public body: string,
    public to: string,
    public from: string,
    public sentAt?: Date,
    public relatedTo?: string
  ) {}
}

export class UpdateEmailDto {
  constructor(
    public subject?: string,
    public body?: string,
    public to?: string,
    public from?: string,
    public sentAt?: Date,
    public relatedTo?: string
  ) {}
}
