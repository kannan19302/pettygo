export class CreateOnboardingDto {
  employeeId: number;
  startDate: Date;
  checklist?: string;
}

export class UpdateOnboardingDto {
  startDate?: Date;
  checklist?: string;
  status?: string;
}
