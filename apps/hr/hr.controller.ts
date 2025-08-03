import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { HrService } from './hr.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
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

@Controller('hr')
export class HrController {
  constructor(private readonly hrService: HrService) {}

  @Get()
  getHello() {
    return this.hrService.getHello();
  }

  @Get('employees')
  findAll() {
    return this.hrService.findAll();
  }

  @Get('employees/:id')
  findOne(@Param('id') id: string) {
    return this.hrService.findOne(Number(id));
  }

  @Post('employees')
  create(@Body() dto: CreateEmployeeDto) {
    return this.hrService.create(dto);
  }

  @Patch('employees/:id')
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    return this.hrService.update(Number(id), dto);
  }

  @Delete('employees/:id')
  remove(@Param('id') id: string) {
    this.hrService.remove(Number(id));
    return { success: true };
  }

  // Onboarding
  @Post('onboardings')
  createOnboarding(@Body() dto: CreateOnboardingDto) {
    return this.hrService.createOnboarding(dto);
  }
  @Get('onboardings')
  findAllOnboardings() {
    return this.hrService.findAllOnboardings();
  }
  @Patch('onboardings/:id')
  updateOnboarding(@Param('id') id: string, @Body() dto: UpdateOnboardingDto) {
    return this.hrService.updateOnboarding(Number(id), dto);
  }
  @Delete('onboardings/:id')
  removeOnboarding(@Param('id') id: string) {
    this.hrService.removeOnboarding(Number(id));
    return { success: true };
  }

  // Offboarding
  @Post('offboardings')
  createOffboarding(@Body() dto: CreateOffboardingDto) {
    return this.hrService.createOffboarding(dto);
  }
  @Get('offboardings')
  findAllOffboardings() {
    return this.hrService.findAllOffboardings();
  }
  @Patch('offboardings/:id')
  updateOffboarding(@Param('id') id: string, @Body() dto: UpdateOffboardingDto) {
    return this.hrService.updateOffboarding(Number(id), dto);
  }
  @Delete('offboardings/:id')
  removeOffboarding(@Param('id') id: string) {
    this.hrService.removeOffboarding(Number(id));
    return { success: true };
  }

  // Case
  @Post('cases')
  createCase(@Body() dto: CreateCaseDto) {
    return this.hrService.createCase(dto);
  }
  @Get('cases')
  findAllCases() {
    return this.hrService.findAllCases();
  }
  @Patch('cases/:id')
  updateCase(@Param('id') id: string, @Body() dto: UpdateCaseDto) {
    return this.hrService.updateCase(Number(id), dto);
  }
  @Delete('cases/:id')
  removeCase(@Param('id') id: string) {
    this.hrService.removeCase(Number(id));
    return { success: true };
  }

  // Compensation
  @Post('compensations')
  createCompensation(@Body() dto: CreateCompensationDto) {
    return this.hrService.createCompensation(dto);
  }
  @Get('compensations')
  findAllCompensations() {
    return this.hrService.findAllCompensations();
  }
  @Patch('compensations/:id')
  updateCompensation(@Param('id') id: string, @Body() dto: UpdateCompensationDto) {
    return this.hrService.updateCompensation(Number(id), dto);
  }
  @Delete('compensations/:id')
  removeCompensation(@Param('id') id: string) {
    this.hrService.removeCompensation(Number(id));
    return { success: true };
  }

  // Expense
  @Post('expenses')
  createExpense(@Body() dto: CreateExpenseDto) {
    return this.hrService.createExpense(dto);
  }
  @Get('expenses')
  findAllExpenses() {
    return this.hrService.findAllExpenses();
  }
  @Patch('expenses/:id')
  updateExpense(@Param('id') id: string, @Body() dto: UpdateExpenseDto) {
    return this.hrService.updateExpense(Number(id), dto);
  }
  @Delete('expenses/:id')
  removeExpense(@Param('id') id: string) {
    this.hrService.removeExpense(Number(id));
    return { success: true };
  }

  // Training
  @Post('trainings')
  createTraining(@Body() dto: CreateTrainingDto) {
    return this.hrService.createTraining(dto);
  }
  @Get('trainings')
  findAllTrainings() {
    return this.hrService.findAllTrainings();
  }
  @Patch('trainings/:id')
  updateTraining(@Param('id') id: string, @Body() dto: UpdateTrainingDto) {
    return this.hrService.updateTraining(Number(id), dto);
  }
  @Delete('trainings/:id')
  removeTraining(@Param('id') id: string) {
    this.hrService.removeTraining(Number(id));
    return { success: true };
  }

  // Asset
  @Post('assets')
  createAsset(@Body() dto: CreateAssetDto) {
    return this.hrService.createAsset(dto);
  }
  @Get('assets')
  findAllAssets() {
    return this.hrService.findAllAssets();
  }
  @Patch('assets/:id')
  updateAsset(@Param('id') id: string, @Body() dto: UpdateAssetDto) {
    return this.hrService.updateAsset(Number(id), dto);
  }
  @Delete('assets/:id')
  removeAsset(@Param('id') id: string) {
    this.hrService.removeAsset(Number(id));
    return { success: true };
  }

  // Compliance
  @Post('compliances')
  createCompliance(@Body() dto: CreateComplianceDto) {
    return this.hrService.createCompliance(dto);
  }
  @Get('compliances')
  findAllCompliances() {
    return this.hrService.findAllCompliances();
  }
  @Patch('compliances/:id')
  updateCompliance(@Param('id') id: string, @Body() dto: UpdateComplianceDto) {
    return this.hrService.updateCompliance(Number(id), dto);
  }
  @Delete('compliances/:id')
  removeCompliance(@Param('id') id: string) {
    this.hrService.removeCompliance(Number(id));
    return { success: true };
  }

  // Custom Form
  @Post('custom-forms')
  createCustomForm(@Body() dto: CreateCustomFormDto) {
    return this.hrService.createCustomForm(dto);
  }
  @Get('custom-forms')
  findAllCustomForms() {
    return this.hrService.findAllCustomForms();
  }
  @Patch('custom-forms/:id')
  updateCustomForm(@Param('id') id: string, @Body() dto: UpdateCustomFormDto) {
    return this.hrService.updateCustomForm(Number(id), dto);
  }
  @Delete('custom-forms/:id')
  removeCustomForm(@Param('id') id: string) {
    this.hrService.removeCustomForm(Number(id));
    return { success: true };
  }
  @Post('custom-form-responses')
  createCustomFormResponse(@Body() dto: CreateCustomFormResponseDto) {
    return this.hrService.createCustomFormResponse(dto);
  }
  @Get('custom-form-responses')
  findAllCustomFormResponses() {
    return this.hrService.findAllCustomFormResponses();
  }

  // Location
  @Post('locations')
  createLocation(@Body() dto: CreateLocationDto) {
    return this.hrService.createLocation(dto);
  }
  @Get('locations')
  findAllLocations() {
    return this.hrService.findAllLocations();
  }
  @Patch('locations/:id')
  updateLocation(@Param('id') id: string, @Body() dto: UpdateLocationDto) {
    return this.hrService.updateLocation(Number(id), dto);
  }
  @Delete('locations/:id')
  removeLocation(@Param('id') id: string) {
    this.hrService.removeLocation(Number(id));
    return { success: true };
  }

  // Currency
  @Post('currencies')
  createCurrency(@Body() dto: CreateCurrencyDto) {
    return this.hrService.createCurrency(dto);
  }
  @Get('currencies')
  findAllCurrencies() {
    return this.hrService.findAllCurrencies();
  }
  @Patch('currencies/:id')
  updateCurrency(@Param('id') id: string, @Body() dto: UpdateCurrencyDto) {
    return this.hrService.updateCurrency(Number(id), dto);
  }
  @Delete('currencies/:id')
  removeCurrency(@Param('id') id: string) {
    this.hrService.removeCurrency(Number(id));
    return { success: true };
  }
}
