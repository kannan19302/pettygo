
export class CreatePipelineDto {
  constructor(
    public name: string,
    public order: number,
    public description?: string
  ) {}
}

export class UpdatePipelineDto {
  constructor(
    public name?: string,
    public order?: number,
    public description?: string
  ) {}
}
