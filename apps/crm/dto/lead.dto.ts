
export class LeadDto {
  id?: number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  company?: string;
  status?: string;
  source?: string;
  ownerId?: number;
  createdAt?: Date;
}

export class CreateLeadDto {
  constructor(
    public firstName: string,
    public lastName: string,
    public email?: string,
    public phone?: string,
    public company?: string,
    public status?: string,
    public source?: string,
    public ownerId?: number
  ) {}
}

export class UpdateLeadDto {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public phone?: string,
    public company?: string,
    public status?: string,
    public source?: string,
    public ownerId?: number
  ) {}
}
