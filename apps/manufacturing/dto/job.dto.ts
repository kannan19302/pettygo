export class CreateJobDto {
  name: string;
  status: string;
}

export class UpdateJobDto {
  name?: string;
  status?: string;
}
