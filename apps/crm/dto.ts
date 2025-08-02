
export class CreateLeadDto {
  constructor(
    public name: string,
    public email: string,
    public company?: string,
    public phone?: string,
    public status?: string,
    public source?: string,
    public ownerId?: number,
  ) {}
}


export class UpdateLeadDto {
  constructor(
    public name?: string,
    public email?: string,
    public company?: string,
    public phone?: string,
    public status?: string,
    public source?: string,
    public ownerId?: number,
  ) {}
}
