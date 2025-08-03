export class Expense {
  id: number;
  employeeId: number;
  type: string;
  amount: number;
  description?: string;
  status: string;
  submittedAt: Date;
}
