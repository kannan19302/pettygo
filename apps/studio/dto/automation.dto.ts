export class CreateStudioAutomationDto {
  name: string;
  trigger: string;
  action: string;
  config?: string;
  active?: boolean;
  createdBy?: number;
}

export class UpdateStudioAutomationDto {
  name?: string;
  trigger?: string;
  action?: string;
  config?: string;
  active?: boolean;
}
