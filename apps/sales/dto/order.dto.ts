export class CreateOrderDto {
  customer: string;
  amount: number;
  status: string;
}

export class UpdateOrderDto {
  customer?: string;
  amount?: number;
  status?: string;
}
