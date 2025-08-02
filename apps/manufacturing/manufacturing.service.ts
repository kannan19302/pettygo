import { Injectable, NotFoundException } from '@nestjs/common';
import { Job } from './entities/job.entity';
import { CreateJobDto, UpdateJobDto } from './dto/job.dto';

@Injectable()
export class ManufacturingService {
  private jobs: Job[] = [
    { id: 1, name: 'Batch #1', status: 'In Progress' },
    { id: 2, name: 'Batch #2', status: 'Planned' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to Manufacturing module!' };
  }

  findAll(): Job[] {
    return this.jobs;
  }

  findOne(id: number): Job {
    const job = this.jobs.find(j => j.id === id);
    if (!job) throw new NotFoundException('Job not found');
    return job;
  }

  create(dto: CreateJobDto): Job {
    const job: Job = { id: this.nextId++, ...dto };
    this.jobs.push(job);
    return job;
  }

  update(id: number, dto: UpdateJobDto): Job {
    const job = this.findOne(id);
    Object.assign(job, dto);
    return job;
  }

  remove(id: number): void {
    const idx = this.jobs.findIndex(j => j.id === id);
    if (idx === -1) throw new NotFoundException('Job not found');
    this.jobs.splice(idx, 1);
  }
}
