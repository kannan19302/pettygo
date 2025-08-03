export class CreateExpenseDto {
  employeeId: number;
  type: string;
  amount: number;
  description?: string;
}

export class UpdateExpenseDto {
  type?: string;
  amount?: number;
  description?: string;
  status?: string;
}
