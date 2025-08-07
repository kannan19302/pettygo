export class CreateStudioWorkflowDto {
  name: string;
  description?: string;
  steps?: CreateStudioWorkflowStepDto[];
}

export class CreateStudioWorkflowStepDto {
  name: string;
  type: string;
  config: string;
  order?: number;
}

export class UpdateStudioWorkflowDto {
  name?: string;
  description?: string;
  steps?: UpdateStudioWorkflowStepDto[];
}

export class UpdateStudioWorkflowStepDto {
  name?: string;
  type?: string;
  config?: string;
  order?: number;
}
