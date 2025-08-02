export class CreateReportDto {
  title: string;
  type: string;
  value: number;
}

export class UpdateReportDto {
  title?: string;
  type?: string;
  value?: number;
}
