export class CreateCompensationDto {
  employeeId: number;
  type: string;
  amount: number;
  effectiveDate: Date;
}

export class UpdateCompensationDto {
  type?: string;
  amount?: number;
  effectiveDate?: Date;
  status?: string;
}
