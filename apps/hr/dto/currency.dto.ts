export class CreateCurrencyDto {
  code: string;
  name: string;
  symbol: string;
}

export class UpdateCurrencyDto {
  code?: string;
  name?: string;
  symbol?: string;
}
