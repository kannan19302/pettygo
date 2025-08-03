export class CreateComplianceDto {
  policy: string;
  employeeId?: number;
  acknowledgedAt?: Date;
}

export class UpdateComplianceDto {
  policy?: string;
  employeeId?: number;
  acknowledgedAt?: Date;
}
