
import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, UsePipes } from '@nestjs/common';
import { StudioService } from './studio.service';
import { CreateStudioAutomationDto, UpdateStudioAutomationDto } from './dto/automation.dto';
import { CreateStudioFormDto, UpdateStudioFormDto } from './dto/form.dto';
import { CreateStudioWorkflowDto, UpdateStudioWorkflowDto } from './dto/workflow.dto';
import { CreateStudioUIConfigDto, UpdateStudioUIConfigDto } from './dto/ui-config.dto';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { ValidationPipe } from './pipes/validation.pipe';

@Controller('studio')
@UseGuards(RolesGuard)
export class StudioController {
  constructor(private readonly studioService: StudioService) {}

  @Get()
  getHello() {
    return this.studioService.getHello();
  }

  // --- Automations ---
  @Get('automations')
  async findAllAutomations() {
    return this.studioService.findAllAutomations();
  }

  @Get('automations/:id')
  async findAutomation(@Param('id') id: string) {
    return this.studioService.findAutomation(Number(id));
  }

  @Post('automations')
  @Roles('admin', 'studio-manager')
  @UsePipes(new ValidationPipe())
  async createAutomation(@Body() dto: CreateStudioAutomationDto) {
    return this.studioService.createAutomation(dto);
  }

  @Patch('automations/:id')
  async updateAutomation(@Param('id') id: string, @Body() dto: UpdateStudioAutomationDto) {
    return this.studioService.updateAutomation(Number(id), dto);
  }

  @Delete('automations/:id')
  async removeAutomation(@Param('id') id: string) {
    await this.studioService.removeAutomation(Number(id));
    return { success: true };
  }

  // --- Forms ---
  @Get('forms')
  async findAllForms() {
    return this.studioService.findAllForms();
  }

  @Get('forms/:id')
  async findForm(@Param('id') id: string) {
    return this.studioService.findForm(Number(id));
  }

  @Post('forms')
  @Roles('admin', 'studio-manager')
  @UsePipes(new ValidationPipe())
  async createForm(@Body() dto: CreateStudioFormDto) {
    return this.studioService.createForm(dto);
  }

  @Patch('forms/:id')
  async updateForm(@Param('id') id: string, @Body() dto: UpdateStudioFormDto) {
    return this.studioService.updateForm(Number(id), dto);
  }

  @Delete('forms/:id')
  async removeForm(@Param('id') id: string) {
    await this.studioService.removeForm(Number(id));
    return { success: true };
  }

  // --- Workflows ---
  @Get('workflows')
  async findAllWorkflows() {
    return this.studioService.findAllWorkflows();
  }

  @Get('workflows/:id')
  async findWorkflow(@Param('id') id: string) {
    return this.studioService.findWorkflow(Number(id));
  }

  @Post('workflows')
  @Roles('admin', 'studio-manager')
  @UsePipes(new ValidationPipe())
  async createWorkflow(@Body() dto: CreateStudioWorkflowDto) {
    return this.studioService.createWorkflow(dto);
  }

  @Patch('workflows/:id')
  async updateWorkflow(@Param('id') id: string, @Body() dto: UpdateStudioWorkflowDto) {
    return this.studioService.updateWorkflow(Number(id), dto);
  }

  @Delete('workflows/:id')
  async removeWorkflow(@Param('id') id: string) {
    await this.studioService.removeWorkflow(Number(id));
    return { success: true };
  }

  // --- UI Configs ---
  @Get('ui-configs')
  async findAllUIConfigs() {
    return this.studioService.findAllUIConfigs();
  }

  @Get('ui-configs/:id')
  async findUIConfig(@Param('id') id: string) {
    return this.studioService.findUIConfig(Number(id));
  }

  @Post('ui-configs')
  @Roles('admin', 'studio-manager', 'user')
  @UsePipes(new ValidationPipe())
  async createUIConfig(@Body() dto: CreateStudioUIConfigDto) {
    return this.studioService.createUIConfig(dto);
  }

  @Patch('ui-configs/:id')
  async updateUIConfig(@Param('id') id: string, @Body() dto: UpdateStudioUIConfigDto) {
    return this.studioService.updateUIConfig(Number(id), dto);
  }

  @Delete('ui-configs/:id')
  async removeUIConfig(@Param('id') id: string) {
    await this.studioService.removeUIConfig(Number(id));
    return { success: true };
  }
}
}
