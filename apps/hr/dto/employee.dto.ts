export class CreateEmployeeDto {
  name: string;
  email: string;
  position: string;
  department: string;
}

export class UpdateEmployeeDto {
  name?: string;
  email?: string;
  position?: string;
  department?: string;
}
