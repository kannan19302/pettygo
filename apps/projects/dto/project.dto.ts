export class CreateProjectDto {
  name: string;
  description: string;
  status: string;
}

export class UpdateProjectDto {
  name?: string;
  description?: string;
  status?: string;
}
