import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from './entities/role.entity';
import { CreateRoleDto, UpdateRoleDto } from './dto/role.dto';

@Injectable()
export class AdminToolsService {
  private roles: Role[] = [
    { id: 1, name: 'Super Admin', permissions: ['*'] },
    { id: 2, name: 'Admin', permissions: ['manage-users', 'manage-modules'] },
    { id: 3, name: 'User', permissions: ['view-modules'] },
  ];
  private nextId = 4;

  findAll(): Role[] {
    return this.roles;
  }

  findOne(id: number): Role {
    const role = this.roles.find(r => r.id === id);
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  create(dto: CreateRoleDto): Role {
    const role: Role = { id: this.nextId++, ...dto };
    this.roles.push(role);
    return role;
  }

  update(id: number, dto: UpdateRoleDto): Role {
    const role = this.findOne(id);
    Object.assign(role, dto);
    return role;
  }

  remove(id: number): void {
    const idx = this.roles.findIndex(r => r.id === id);
    if (idx === -1) throw new NotFoundException('Role not found');
    this.roles.splice(idx, 1);
  }
}
