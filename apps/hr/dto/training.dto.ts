export class CreateTrainingDto {
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
}

export class UpdateTrainingDto {
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
}
