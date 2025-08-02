import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CrmService } from './crm.service';
import { CreateLeadDto, UpdateLeadDto } from './dto';
import { Lead, Note, Activity } from './entities/lead.entity';
import { Contact } from './entities/contact.entity';
import { Account } from './entities/account.entity';
import { Deal } from './entities/deal.entity';
import { PipelineStage } from './entities/pipeline.entity';
import { EmailLog } from './entities/email.entity';
import { AnalyticsEvent } from './entities/analytics.entity';

@Controller('crm')
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  // --- Leads ---
  @Post('leads')
  createLead(@Body() dto: CreateLeadDto) {
    return this.crmService.createLead(dto);
  }
  @Get('leads')
  getLeads() {
    return this.crmService.getLeads();
  }
  @Get('leads/:id')
  getLead(@Param('id') id: string) {
    return this.crmService.getLead(Number(id));
  }
  @Patch('leads/:id')
  updateLead(@Param('id') id: string, @Body() dto: UpdateLeadDto) {
    return this.crmService.updateLead(Number(id), dto);
  }
  @Delete('leads/:id')
  deleteLead(@Param('id') id: string) {
    return this.crmService.deleteLead(Number(id));
  }

  // --- Contacts ---
  @Post('contacts')
  createContact(@Body() contact: Contact) {
    return this.crmService.createContact(contact);
  }
  @Get('contacts')
  getContacts() {
    return this.crmService.getContacts();
  }
  @Get('contacts/:id')
  getContact(@Param('id') id: string) {
    return this.crmService.getContact(Number(id));
  }
  @Patch('contacts/:id')
  updateContact(@Param('id') id: string, @Body() update: Partial<Contact>) {
    return this.crmService.updateContact(Number(id), update);
  }
  @Delete('contacts/:id')
  deleteContact(@Param('id') id: string) {
    return this.crmService.deleteContact(Number(id));
  }

  // --- Accounts ---
  @Post('accounts')
  createAccount(@Body() account: Account) {
    return this.crmService.createAccount(account);
  }
  @Get('accounts')
  getAccounts() {
    return this.crmService.getAccounts();
  }
  @Get('accounts/:id')
  getAccount(@Param('id') id: string) {
    return this.crmService.getAccount(Number(id));
  }
  @Patch('accounts/:id')
  updateAccount(@Param('id') id: string, @Body() update: Partial<Account>) {
    return this.crmService.updateAccount(Number(id), update);
  }
  @Delete('accounts/:id')
  deleteAccount(@Param('id') id: string) {
    return this.crmService.deleteAccount(Number(id));
  }

  // --- Deals ---
  @Post('deals')
  createDeal(@Body() deal: Deal) {
    return this.crmService.createDeal(deal);
  }
  @Get('deals')
  getDeals() {
    return this.crmService.getDeals();
  }
  @Get('deals/:id')
  getDeal(@Param('id') id: string) {
    return this.crmService.getDeal(Number(id));
  }
  @Patch('deals/:id')
  updateDeal(@Param('id') id: string, @Body() update: Partial<Deal>) {
    return this.crmService.updateDeal(Number(id), update);
  }
  @Delete('deals/:id')
  deleteDeal(@Param('id') id: string) {
    return this.crmService.deleteDeal(Number(id));
  }

  // --- Pipeline ---
  @Post('pipeline')
  createPipelineStage(@Body() stage: PipelineStage) {
    return this.crmService.createPipelineStage(stage);
  }
  @Get('pipeline')
  getPipeline() {
    return this.crmService.getPipeline();
  }
  @Patch('pipeline/:id')
  updatePipelineStage(@Param('id') id: string, @Body() update: Partial<PipelineStage>) {
    return this.crmService.updatePipelineStage(Number(id), update);
  }
  @Delete('pipeline/:id')
  deletePipelineStage(@Param('id') id: string) {
    return this.crmService.deletePipelineStage(Number(id));
  }

  // --- Activities ---
  @Post('activities')
  createActivity(@Body() activity: Activity) {
    return this.crmService.createActivity(activity);
  }
  @Get('activities')
  getActivities() {
    return this.crmService.getActivities();
  }
  @Get('activities/:id')
  getActivity(@Param('id') id: string) {
    return this.crmService.getActivity(Number(id));
  }
  @Patch('activities/:id')
  updateActivity(@Param('id') id: string, @Body() update: Partial<Activity>) {
    return this.crmService.updateActivity(Number(id), update);
  }
  @Delete('activities/:id')
  deleteActivity(@Param('id') id: string) {
    return this.crmService.deleteActivity(Number(id));
  }

  // --- Notes ---
  @Post('notes')
  createNote(@Body() note: Note) {
    return this.crmService.createNote(note);
  }
  @Get('notes')
  getNotes() {
    return this.crmService.getNotes();
  }
  @Get('notes/:id')
  getNote(@Param('id') id: string) {
    return this.crmService.getNote(Number(id));
  }
  @Patch('notes/:id')
  updateNote(@Param('id') id: string, @Body() update: Partial<Note>) {
    return this.crmService.updateNote(Number(id), update);
  }
  @Delete('notes/:id')
  deleteNote(@Param('id') id: string) {
    return this.crmService.deleteNote(Number(id));
  }

  // --- Email Logs ---
  @Post('emails')
  createEmail(@Body() email: EmailLog) {
    return this.crmService.createEmail(email);
  }
  @Get('emails')
  getEmails() {
    return this.crmService.getEmails();
  }
  @Get('emails/:id')
  getEmail(@Param('id') id: string) {
    return this.crmService.getEmail(Number(id));
  }
  @Delete('emails/:id')
  deleteEmail(@Param('id') id: string) {
    return this.crmService.deleteEmail(Number(id));
  }

  // --- Analytics ---
  @Post('analytics')
  createAnalyticsEvent(@Body() event: AnalyticsEvent) {
    return this.crmService.createAnalyticsEvent(event);
  }
  @Get('analytics')
  getAnalytics() {
    return this.crmService.getAnalytics();
  }
}
