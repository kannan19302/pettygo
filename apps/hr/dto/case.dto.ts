export class CreateCaseDto {
  employeeId: number;
  subject: string;
  description: string;
}

export class UpdateCaseDto {
  subject?: string;
  description?: string;
  status?: string;
}
