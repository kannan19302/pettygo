import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AdminToolsService } from './admin-tools.service';
import { CreateRoleDto, UpdateRoleDto } from './dto/role.dto';

@Controller('admin-tools')
export class AdminToolsController {
  constructor(private readonly adminToolsService: AdminToolsService) {}

  @Get('roles')
  findAll() {
    return this.adminToolsService.findAll();
  }

  @Get('roles/:id')
  findOne(@Param('id') id: string) {
    return this.adminToolsService.findOne(Number(id));
  }

  @Post('roles')
  create(@Body() dto: CreateRoleDto) {
    return this.adminToolsService.create(dto);
  }

  @Patch('roles/:id')
  update(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    return this.adminToolsService.update(Number(id), dto);
  }

  @Delete('roles/:id')
  remove(@Param('id') id: string) {
    this.adminToolsService.remove(Number(id));
    return { success: true };
  }
}
