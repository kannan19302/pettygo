export class CreateSaleDto {
  product: string;
  quantity: number;
  total: number;
}

export class UpdateSaleDto {
  product?: string;
  quantity?: number;
  total?: number;
}
