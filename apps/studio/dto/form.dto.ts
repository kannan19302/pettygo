export class CreateStudioFormDto {
  name: string;
  description?: string;
  fields?: CreateStudioFormFieldDto[];
}

export class CreateStudioFormFieldDto {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string;
  order?: number;
}

export class UpdateStudioFormDto {
  name?: string;
  description?: string;
  fields?: UpdateStudioFormFieldDto[];
}

export class UpdateStudioFormFieldDto {
  name?: string;
  label?: string;
  type?: string;
  required?: boolean;
  options?: string;
  order?: number;
}
