export class CreateAppDto {
  name: string;
  description: string;
  status: string;
}

export class UpdateAppDto {
  name?: string;
  description?: string;
  status?: string;
}
