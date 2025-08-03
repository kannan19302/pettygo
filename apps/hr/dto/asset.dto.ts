export class CreateAssetDto {
  name: string;
  type: string;
  employeeId?: number;
}

export class UpdateAssetDto {
  name?: string;
  type?: string;
  employeeId?: number;
  status?: string;
}
