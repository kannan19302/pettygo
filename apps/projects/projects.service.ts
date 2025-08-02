import { Injectable, NotFoundException } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [
    { id: 1, name: 'ERP Implementation', description: 'Deploy ERP for client', status: 'Active' },
    { id: 2, name: 'Website Redesign', description: 'Redesign company website', status: 'Planning' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Projects module!' };
  }

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: number): Project {
    const project = this.projects.find(p => p.id === id);
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  create(dto: CreateProjectDto): Project {
    const project: Project = { id: this.nextId++, ...dto };
    this.projects.push(project);
    return project;
  }

  update(id: number, dto: UpdateProjectDto): Project {
    const project = this.findOne(id);
    Object.assign(project, dto);
    return project;
  }

  remove(id: number): void {
    const idx = this.projects.findIndex(p => p.id === id);
    if (idx === -1) throw new NotFoundException('Project not found');
    this.projects.splice(idx, 1);
  }
}
