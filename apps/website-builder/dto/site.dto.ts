export class CreateSiteDto {
  name: string;
  url: string;
  status: string;
}

export class UpdateSiteDto {
  name?: string;
  url?: string;
  status?: string;
}
