
export class CreateLeadDto {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  company?: string;
  status?: string;
  source?: string;
  ownerId?: number;
}

export class UpdateLeadDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  status?: string;
  source?: string;
  ownerId?: number;
}

export * from './lead.dto';
export * from './contact.dto';
export * from './account.dto';
export * from './deal.dto';
export * from './activity.dto';
export * from './email.dto';
export * from './pipeline.dto';
