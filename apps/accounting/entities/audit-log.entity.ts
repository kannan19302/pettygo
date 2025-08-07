export class AuditLog {
  id!: number;
  action!: string;
  entity!: string;
  entityId!: number;
  user!: string;
  timestamp!: string;
  details?: string;
}
