import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getHello() {
    return this.projectsService.getHello();
  }

  @Get('projects')
  findAll() {
    return this.projectsService.findAll();
  }

  @Get('projects/:id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(Number(id));
  }

  @Post('projects')
  create(@Body() dto: CreateProjectDto) {
    return this.projectsService.create(dto);
  }

  @Patch('projects/:id')
  update(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
    return this.projectsService.update(Number(id), dto);
  }

  @Delete('projects/:id')
  remove(@Param('id') id: string) {
    this.projectsService.remove(Number(id));
    return { success: true };
  }
}
