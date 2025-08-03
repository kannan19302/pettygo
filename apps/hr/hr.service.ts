import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './entities/employee.entity';
import { Onboarding } from './entities/onboarding.entity';
import { Offboarding } from './entities/offboarding.entity';
import { Case } from './entities/case.entity';
import { Compensation } from './entities/compensation.entity';
import { Expense } from './entities/expense.entity';
import { Training } from './entities/training.entity';
import { Asset } from './entities/asset.entity';
import { Compliance } from './entities/compliance.entity';
import { CustomForm, CustomFormResponse } from './entities/custom-form.entity';
import { Location } from './entities/location.entity';
import { Currency } from './entities/currency.entity';
import {
  CreateEmployeeDto, UpdateEmployeeDto
} from './dto/employee.dto';
import { CreateOnboardingDto, UpdateOnboardingDto } from './dto/onboarding.dto';
import { CreateOffboardingDto, UpdateOffboardingDto } from './dto/offboarding.dto';
import { CreateCaseDto, UpdateCaseDto } from './dto/case.dto';
import { CreateCompensationDto, UpdateCompensationDto } from './dto/compensation.dto';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
import { CreateTrainingDto, UpdateTrainingDto } from './dto/training.dto';
import { CreateAssetDto, UpdateAssetDto } from './dto/asset.dto';
import { CreateComplianceDto, UpdateComplianceDto } from './dto/compliance.dto';
import { CreateCustomFormDto, UpdateCustomFormDto, CreateCustomFormResponseDto } from './dto/custom-form.dto';
import { CreateLocationDto, UpdateLocationDto } from './dto/location.dto';
import { CreateCurrencyDto, UpdateCurrencyDto } from './dto/currency.dto';

@Injectable()
export class HrService {
  private employees: Employee[] = [
    { id: 1, name: 'Alice Smith', email: 'alice@company.com', position: 'HR Manager', department: 'HR' },
    { id: 2, name: 'Bob Lee', email: 'bob@company.com', position: 'Recruiter', department: 'HR' },
  ];
  private nextId = 3;

  // In-memory stores for new features
  private onboardings: Onboarding[] = [];
  private offboardings: Offboarding[] = [];
  private cases: Case[] = [];
  private compensations: Compensation[] = [];
  private expenses: Expense[] = [];
  private trainings: Training[] = [];
  private assets: Asset[] = [];
  private compliances: Compliance[] = [];
  private customForms: CustomForm[] = [];
  private customFormResponses: CustomFormResponse[] = [];
  private locations: Location[] = [];
  private currencies: Currency[] = [];
  private nextGenericId = 1;

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

  // Onboarding
  createOnboarding(dto: CreateOnboardingDto): Onboarding {
    const onboarding: Onboarding = { id: this.nextGenericId++, status: 'Initiated', ...dto };
    this.onboardings.push(onboarding);
    return onboarding;
  }
  findAllOnboardings(): Onboarding[] { return this.onboardings; }
  updateOnboarding(id: number, dto: UpdateOnboardingDto): Onboarding {
    const onboarding = this.onboardings.find(o => o.id === id);
    if (!onboarding) throw new NotFoundException('Onboarding not found');
    Object.assign(onboarding, dto);
    return onboarding;
  }
  removeOnboarding(id: number) {
    const idx = this.onboardings.findIndex(o => o.id === id);
    if (idx === -1) throw new NotFoundException('Onboarding not found');
    this.onboardings.splice(idx, 1);
  }

  // Offboarding
  createOffboarding(dto: CreateOffboardingDto): Offboarding {
    const offboarding: Offboarding = { id: this.nextGenericId++, status: 'Initiated', ...dto };
    this.offboardings.push(offboarding);
    return offboarding;
  }
  findAllOffboardings(): Offboarding[] { return this.offboardings; }
  updateOffboarding(id: number, dto: UpdateOffboardingDto): Offboarding {
    const offboarding = this.offboardings.find(o => o.id === id);
    if (!offboarding) throw new NotFoundException('Offboarding not found');
    Object.assign(offboarding, dto);
    return offboarding;
  }
  removeOffboarding(id: number) {
    const idx = this.offboardings.findIndex(o => o.id === id);
    if (idx === -1) throw new NotFoundException('Offboarding not found');
    this.offboardings.splice(idx, 1);
  }

  // Case
  createCase(dto: CreateCaseDto): Case {
    const c: Case = { id: this.nextGenericId++, status: 'Open', createdAt: new Date(), ...dto };
    this.cases.push(c);
    return c;
  }
  findAllCases(): Case[] { return this.cases; }
  updateCase(id: number, dto: UpdateCaseDto): Case {
    const c = this.cases.find(x => x.id === id);
    if (!c) throw new NotFoundException('Case not found');
    Object.assign(c, dto);
    return c;
  }
  removeCase(id: number) {
    const idx = this.cases.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Case not found');
    this.cases.splice(idx, 1);
  }

  // Compensation
  createCompensation(dto: CreateCompensationDto): Compensation {
    const comp: Compensation = { id: this.nextGenericId++, status: 'Active', ...dto };
    this.compensations.push(comp);
    return comp;
  }
  findAllCompensations(): Compensation[] { return this.compensations; }
  updateCompensation(id: number, dto: UpdateCompensationDto): Compensation {
    const comp = this.compensations.find(x => x.id === id);
    if (!comp) throw new NotFoundException('Compensation not found');
    Object.assign(comp, dto);
    return comp;
  }
  removeCompensation(id: number) {
    const idx = this.compensations.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Compensation not found');
    this.compensations.splice(idx, 1);
  }

  // Expense
  createExpense(dto: CreateExpenseDto): Expense {
    const exp: Expense = { id: this.nextGenericId++, status: 'Pending', submittedAt: new Date(), ...dto };
    this.expenses.push(exp);
    return exp;
  }
  findAllExpenses(): Expense[] { return this.expenses; }
  updateExpense(id: number, dto: UpdateExpenseDto): Expense {
    const exp = this.expenses.find(x => x.id === id);
    if (!exp) throw new NotFoundException('Expense not found');
    Object.assign(exp, dto);
    return exp;
  }
  removeExpense(id: number) {
    const idx = this.expenses.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Expense not found');
    this.expenses.splice(idx, 1);
  }

  // Training
  createTraining(dto: CreateTrainingDto): Training {
    const t: Training = { id: this.nextGenericId++, ...dto };
    this.trainings.push(t);
    return t;
  }
  findAllTrainings(): Training[] { return this.trainings; }
  updateTraining(id: number, dto: UpdateTrainingDto): Training {
    const t = this.trainings.find(x => x.id === id);
    if (!t) throw new NotFoundException('Training not found');
    Object.assign(t, dto);
    return t;
  }
  removeTraining(id: number) {
    const idx = this.trainings.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Training not found');
    this.trainings.splice(idx, 1);
  }

  // Asset
  createAsset(dto: CreateAssetDto): Asset {
    const a: Asset = { id: this.nextGenericId++, status: 'Available', ...dto };
    this.assets.push(a);
    return a;
  }
  findAllAssets(): Asset[] { return this.assets; }
  updateAsset(id: number, dto: UpdateAssetDto): Asset {
    const a = this.assets.find(x => x.id === id);
    if (!a) throw new NotFoundException('Asset not found');
    Object.assign(a, dto);
    return a;
  }
  removeAsset(id: number) {
    const idx = this.assets.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Asset not found');
    this.assets.splice(idx, 1);
  }

  // Compliance
  createCompliance(dto: CreateComplianceDto): Compliance {
    const c: Compliance = { id: this.nextGenericId++, ...dto };
    this.compliances.push(c);
    return c;
  }
  findAllCompliances(): Compliance[] { return this.compliances; }
  updateCompliance(id: number, dto: UpdateComplianceDto): Compliance {
    const c = this.compliances.find(x => x.id === id);
    if (!c) throw new NotFoundException('Compliance not found');
    Object.assign(c, dto);
    return c;
  }
  removeCompliance(id: number) {
    const idx = this.compliances.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Compliance not found');
    this.compliances.splice(idx, 1);
  }

  // Custom Form
  createCustomForm(dto: CreateCustomFormDto): CustomForm {
    const f: CustomForm = { id: this.nextGenericId++, ...dto };
    this.customForms.push(f);
    return f;
  }
  findAllCustomForms(): CustomForm[] { return this.customForms; }
  updateCustomForm(id: number, dto: UpdateCustomFormDto): CustomForm {
    const f = this.customForms.find(x => x.id === id);
    if (!f) throw new NotFoundException('CustomForm not found');
    Object.assign(f, dto);
    return f;
  }
  removeCustomForm(id: number) {
    const idx = this.customForms.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('CustomForm not found');
    this.customForms.splice(idx, 1);
  }
  createCustomFormResponse(dto: CreateCustomFormResponseDto): CustomFormResponse {
    const r: CustomFormResponse = { id: this.nextGenericId++, submittedAt: new Date(), ...dto };
    this.customFormResponses.push(r);
    return r;
  }
  findAllCustomFormResponses(): CustomFormResponse[] { return this.customFormResponses; }

  // Location
  createLocation(dto: CreateLocationDto): Location {
    const l: Location = { id: this.nextGenericId++, ...dto };
    this.locations.push(l);
    return l;
  }
  findAllLocations(): Location[] { return this.locations; }
  updateLocation(id: number, dto: UpdateLocationDto): Location {
    const l = this.locations.find(x => x.id === id);
    if (!l) throw new NotFoundException('Location not found');
    Object.assign(l, dto);
    return l;
  }
  removeLocation(id: number) {
    const idx = this.locations.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Location not found');
    this.locations.splice(idx, 1);
  }

  // Currency
  createCurrency(dto: CreateCurrencyDto): Currency {
    const c: Currency = { id: this.nextGenericId++, ...dto };
    this.currencies.push(c);
    return c;
  }
  findAllCurrencies(): Currency[] { return this.currencies; }
  updateCurrency(id: number, dto: UpdateCurrencyDto): Currency {
    const c = this.currencies.find(x => x.id === id);
    if (!c) throw new NotFoundException('Currency not found');
    Object.assign(c, dto);
    return c;
  }
  removeCurrency(id: number) {
    const idx = this.currencies.findIndex(x => x.id === id);
    if (idx === -1) throw new NotFoundException('Currency not found');
    this.currencies.splice(idx, 1);
  }
}
