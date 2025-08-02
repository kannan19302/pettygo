export class CreateAutomationDto {
  name: string;
  trigger: string;
  action: string;
}

export class UpdateAutomationDto {
  name?: string;
  trigger?: string;
  action?: string;
}
