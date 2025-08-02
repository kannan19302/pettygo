export class CreateItemDto {
  name: string;
  sku: string;
  quantity: number;
}

export class UpdateItemDto {
  name?: string;
  sku?: string;
  quantity?: number;
}
