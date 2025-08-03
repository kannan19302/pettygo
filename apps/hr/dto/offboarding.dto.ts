export class CreateOffboardingDto {
  employeeId: number;
  endDate: Date;
  checklist?: string;
}

export class UpdateOffboardingDto {
  endDate?: Date;
  checklist?: string;
  status?: string;
}
