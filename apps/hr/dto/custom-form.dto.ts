export class CreateCustomFormDto {
  name: string;
  fields: string; // JSON schema
}

export class UpdateCustomFormDto {
  name?: string;
  fields?: string;
}

export class CreateCustomFormResponseDto {
  formId: number;
  employeeId: number;
  response: string; // JSON
}
