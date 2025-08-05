export class CreateAuditLogDto {
  action: string;
  entity: string;
  entityId: number;
  user: string;
  details?: string;
}
