export class CustomForm {
  id: number;
  name: string;
  fields: string;
}

export class CustomFormResponse {
  id: number;
  formId: number;
  employeeId: number;
  response: string;
  submittedAt: Date;
}
