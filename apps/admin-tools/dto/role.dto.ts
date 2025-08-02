export class CreateRoleDto {
  name: string;
  permissions: string[];
}

export class UpdateRoleDto {
  name?: string;
  permissions?: string[];
}
