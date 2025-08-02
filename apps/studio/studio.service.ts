import { Injectable, NotFoundException } from '@nestjs/common';
import { Automation } from './entities/automation.entity';
import { CreateAutomationDto, UpdateAutomationDto } from './dto/automation.dto';

@Injectable()
export class StudioService {
  private automations: Automation[] = [
    { id: 1, name: 'Auto-assign Lead', trigger: 'Lead Created', action: 'Assign to Sales' },
    { id: 2, name: 'Send Welcome Email', trigger: 'User Signup', action: 'Send Email' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Studio module!' };
  }

  findAll(): Automation[] {
    return this.automations;
  }

  findOne(id: number): Automation {
    const auto = this.automations.find(a => a.id === id);
    if (!auto) throw new NotFoundException('Automation not found');
    return auto;
  }

  create(dto: CreateAutomationDto): Automation {
    const auto: Automation = { id: this.nextId++, ...dto };
    this.automations.push(auto);
    return auto;
  }

  update(id: number, dto: UpdateAutomationDto): Automation {
    const auto = this.findOne(id);
    Object.assign(auto, dto);
    return auto;
  }

  remove(id: number): void {
    const idx = this.automations.findIndex(a => a.id === id);
    if (idx === -1) throw new NotFoundException('Automation not found');
    this.automations.splice(idx, 1);
  }
}
