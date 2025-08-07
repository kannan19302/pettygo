export class StudioWorkflow {
  id: number;
  name: string;
  description?: string;
  steps?: StudioWorkflowStep[];
  version: number;
  active: boolean;
  createdBy?: number;
  createdAt: Date;
  updatedAt: Date;
}

export class StudioWorkflowStep {
  id: number;
  workflowId: number;
  name: string;
  type: string;
  config: string;
  order: number;
}
