export class CreatePurchaseDto {
  vendor: string;
  amount: number;
  status: string;
}

export class UpdatePurchaseDto {
  vendor?: string;
  amount?: number;
  status?: string;
}
