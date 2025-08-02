export class PipelineStage {
  constructor(
    public id: number,
    public name: string,
    public order: number,
    public description?: string,
  ) {}
}
