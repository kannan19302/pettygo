import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class HrService {
  private employees: Employee[] = [
    { id: 1, name: 'Alice Smith', email: 'alice@company.com', position: 'HR Manager', department: 'HR' },
    { id: 2, name: 'Bob Lee', email: 'bob@company.com', position: 'Recruiter', department: 'HR' },
  ];
  private nextId = 3;

  getHello() {
    return { message: 'Welcome to HR module!' };
  }

  findAll(): Employee[] {
    return this.employees;
  }

  findOne(id: number): Employee {
    const emp = this.employees.find(e => e.id === id);
    if (!emp) throw new NotFoundException('Employee not found');
    return emp;
  }

  create(dto: CreateEmployeeDto): Employee {
    const emp: Employee = { id: this.nextId++, ...dto };
    this.employees.push(emp);
    return emp;
  }

  update(id: number, dto: UpdateEmployeeDto): Employee {
    const emp = this.findOne(id);
    Object.assign(emp, dto);
    return emp;
  }

  remove(id: number): void {
    const idx = this.employees.findIndex(e => e.id === id);
    if (idx === -1) throw new NotFoundException('Employee not found');
    this.employees.splice(idx, 1);
  }
}
