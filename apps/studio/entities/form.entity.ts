export class StudioForm {
  id: number;
  name: string;
  description?: string;
  fields?: StudioFormField[];
  version: number;
  createdBy?: number;
  createdAt: Date;
  updatedAt: Date;
}

export class StudioFormField {
  id: number;
  formId: number;
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string;
  order: number;
}
