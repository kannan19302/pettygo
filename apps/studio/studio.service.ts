
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { StudioAutomation } from './entities/automation.entity';
import { CreateStudioAutomationDto, UpdateStudioAutomationDto } from './dto/automation.dto';
import { StudioForm, StudioFormField } from './entities/form.entity';
import { CreateStudioFormDto, UpdateStudioFormDto } from './dto/form.dto';
import { StudioWorkflow, StudioWorkflowStep } from './entities/workflow.entity';
import { CreateStudioWorkflowDto, UpdateStudioWorkflowDto } from './dto/workflow.dto';
import { StudioUIConfig } from './entities/ui-config.entity';
import { CreateStudioUIConfigDto, UpdateStudioUIConfigDto } from './dto/ui-config.dto';

@Injectable()
export class StudioService {
  private prisma = new PrismaClient();

  getHello() {
    return { message: 'Welcome to Studio module!' };
  }

  // --- StudioAutomation CRUD ---
  async findAllAutomations(): Promise<StudioAutomation[]> {
    return this.prisma.studioAutomation.findMany();
  }

  async findAutomation(id: number): Promise<StudioAutomation> {
    const auto = await this.prisma.studioAutomation.findUnique({ where: { id } });
    if (!auto) throw new NotFoundException('Automation not found');
    return auto;
  }

  async createAutomation(dto: CreateStudioAutomationDto): Promise<StudioAutomation> {
    return this.prisma.studioAutomation.create({ data: dto });
  }

  async updateAutomation(id: number, dto: UpdateStudioAutomationDto): Promise<StudioAutomation> {
    return this.prisma.studioAutomation.update({ where: { id }, data: dto });
  }

  async removeAutomation(id: number): Promise<void> {
    await this.prisma.studioAutomation.delete({ where: { id } });
  }

  // --- StudioForm CRUD (scaffold) ---
  async findAllForms(): Promise<StudioForm[]> {
    return this.prisma.studioForm.findMany({ include: { fields: true } });
  }
  async findForm(id: number): Promise<StudioForm> {
    return this.prisma.studioForm.findUnique({ where: { id }, include: { fields: true } });
  }
  async createForm(dto: CreateStudioFormDto): Promise<StudioForm> {
    return this.prisma.studioForm.create({
      data: {
        name: dto.name,
        description: dto.description,
        fields: dto.fields ? { create: dto.fields } : undefined,
      },
      include: { fields: true },
    });
  }
  async updateForm(id: number, dto: UpdateStudioFormDto): Promise<StudioForm> {
    // For simplicity, not handling field updates here
    return this.prisma.studioForm.update({ where: { id }, data: dto, include: { fields: true } });
  }
  async removeForm(id: number): Promise<void> {
    await this.prisma.studioForm.delete({ where: { id } });
  }

  // --- StudioWorkflow CRUD (scaffold) ---
  async findAllWorkflows(): Promise<StudioWorkflow[]> {
    return this.prisma.studioWorkflow.findMany({ include: { steps: true } });
  }
  async findWorkflow(id: number): Promise<StudioWorkflow> {
    return this.prisma.studioWorkflow.findUnique({ where: { id }, include: { steps: true } });
  }
  async createWorkflow(dto: CreateStudioWorkflowDto): Promise<StudioWorkflow> {
    return this.prisma.studioWorkflow.create({
      data: {
        name: dto.name,
        description: dto.description,
        steps: dto.steps ? { create: dto.steps } : undefined,
      },
      include: { steps: true },
    });
  }
  async updateWorkflow(id: number, dto: UpdateStudioWorkflowDto): Promise<StudioWorkflow> {
    // For simplicity, not handling step updates here
    return this.prisma.studioWorkflow.update({ where: { id }, data: dto, include: { steps: true } });
  }
  async removeWorkflow(id: number): Promise<void> {
    await this.prisma.studioWorkflow.delete({ where: { id } });
  }

  // --- StudioUIConfig CRUD (scaffold) ---
  async findAllUIConfigs(): Promise<StudioUIConfig[]> {
    return this.prisma.studioUIConfig.findMany();
  }
  async findUIConfig(id: number): Promise<StudioUIConfig> {
    return this.prisma.studioUIConfig.findUnique({ where: { id } });
  }
  async createUIConfig(dto: CreateStudioUIConfigDto): Promise<StudioUIConfig> {
    return this.prisma.studioUIConfig.create({ data: dto });
  }
  async updateUIConfig(id: number, dto: UpdateStudioUIConfigDto): Promise<StudioUIConfig> {
    return this.prisma.studioUIConfig.update({ where: { id }, data: dto });
  }
  async removeUIConfig(id: number): Promise<void> {
    await this.prisma.studioUIConfig.delete({ where: { id } });
  }
}
