import { Injectable } from '@nestjs/common';
import { CreateLeadDto, UpdateLeadDto } from './dto';
import { Lead, Note, Activity } from './entities/lead.entity';
import { Contact } from './entities/contact.entity';
import { Account } from './entities/account.entity';
import { Deal } from './entities/deal.entity';
import { PipelineStage } from './entities/pipeline.entity';
import { EmailLog } from './entities/email.entity';
import { AnalyticsEvent } from './entities/analytics.entity';

@Injectable()
export class CrmService {
  // ...existing code...


  findAll() {
    return this.leads;
  }

  findOne(id: number) {
    return this.leads.find(l => l.id === id);
  }
  private leads: Lead[] = [];
  private contacts: Contact[] = [];
  private accounts: Account[] = [];
  private deals: Deal[] = [];
  private pipeline: PipelineStage[] = [];
  private activities: Activity[] = [];
  private notes: Note[] = [];
  private emails: EmailLog[] = [];
  private analytics: AnalyticsEvent[] = [];

  // --- Leads ---
  createLead(createLeadDto: CreateLeadDto): Lead {
    const lead = new Lead(
      Date.now(),
      createLeadDto.name,
      createLeadDto.email,
      createLeadDto.company,
      createLeadDto.phone,
      createLeadDto.status,
      createLeadDto.source,
      createLeadDto.ownerId,
      new Date(),
      new Date(),
      [],
      []
    );
    this.leads.push(lead);
    return lead;
  }
  getLeads(): Lead[] { return this.leads; }
  getLead(id: number): Lead | undefined { return this.leads.find(l => l.id === id); }
  updateLead(id: number, dto: UpdateLeadDto): Lead | undefined {
    const lead = this.getLead(id);
    if (lead) Object.assign(lead, dto, { updatedAt: new Date() });
    return lead;
  }
  deleteLead(id: number) {
    this.leads = this.leads.filter(l => l.id !== id);
    return { deleted: true };
  }

  // --- Contacts ---
  createContact(contact: Contact): Contact {
    this.contacts.push(contact);
    return contact;
  }
  getContacts(): Contact[] { return this.contacts; }
  getContact(id: number): Contact | undefined { return this.contacts.find(c => c.id === id); }
  updateContact(id: number, update: Partial<Contact>): Contact | undefined {
    const contact = this.getContact(id);
    if (contact) Object.assign(contact, update, { updatedAt: new Date() });
    return contact;
  }
  deleteContact(id: number) {
    this.contacts = this.contacts.filter(c => c.id !== id);
    return { deleted: true };
  }

  // --- Accounts ---
  createAccount(account: Account): Account {
    this.accounts.push(account);
    return account;
  }
  getAccounts(): Account[] { return this.accounts; }
  getAccount(id: number): Account | undefined { return this.accounts.find(a => a.id === id); }
  updateAccount(id: number, update: Partial<Account>): Account | undefined {
    const account = this.getAccount(id);
    if (account) Object.assign(account, update, { updatedAt: new Date() });
    return account;
  }
  deleteAccount(id: number) {
    this.accounts = this.accounts.filter(a => a.id !== id);
    return { deleted: true };
  }

  // --- Deals ---
  createDeal(deal: Deal): Deal {
    this.deals.push(deal);
    return deal;
  }
  getDeals(): Deal[] { return this.deals; }
  getDeal(id: number): Deal | undefined { return this.deals.find(d => d.id === id); }
  updateDeal(id: number, update: Partial<Deal>): Deal | undefined {
    const deal = this.getDeal(id);
    if (deal) Object.assign(deal, update, { updatedAt: new Date() });
    return deal;
  }
  deleteDeal(id: number) {
    this.deals = this.deals.filter(d => d.id !== id);
    return { deleted: true };
  }

  // --- Pipeline ---
  createPipelineStage(stage: PipelineStage): PipelineStage {
    this.pipeline.push(stage);
    return stage;
  }
  getPipeline(): PipelineStage[] { return this.pipeline; }
  updatePipelineStage(id: number, update: Partial<PipelineStage>): PipelineStage | undefined {
    const stage = this.pipeline.find(s => s.id === id);
    if (stage) Object.assign(stage, update);
    return stage;
  }
  deletePipelineStage(id: number) {
    this.pipeline = this.pipeline.filter(s => s.id !== id);
    return { deleted: true };
  }

  // --- Activities ---
  createActivity(activity: Activity): Activity {
    this.activities.push(activity);
    return activity;
  }
  getActivities(): Activity[] { return this.activities; }
  getActivity(id: number): Activity | undefined { return this.activities.find(a => a.id === id); }
  updateActivity(id: number, update: Partial<Activity>): Activity | undefined {
    const activity = this.getActivity(id);
    if (activity) Object.assign(activity, update);
    return activity;
  }
  deleteActivity(id: number) {
    this.activities = this.activities.filter(a => a.id !== id);
    return { deleted: true };
  }

  // --- Notes ---
  createNote(note: Note): Note {
    this.notes.push(note);
    return note;
  }
  getNotes(): Note[] { return this.notes; }
  getNote(id: number): Note | undefined { return this.notes.find(n => n.id === id); }
  updateNote(id: number, update: Partial<Note>): Note | undefined {
    const note = this.getNote(id);
    if (note) Object.assign(note, update);
    return note;
  }
  deleteNote(id: number) {
    this.notes = this.notes.filter(n => n.id !== id);
    return { deleted: true };
  }

  // --- Email Logs ---
  createEmail(email: EmailLog): EmailLog {
    this.emails.push(email);
    return email;
  }
  getEmails(): EmailLog[] { return this.emails; }
  getEmail(id: number): EmailLog | undefined { return this.emails.find(e => e.id === id); }
  deleteEmail(id: number) {
    this.emails = this.emails.filter(e => e.id !== id);
    return { deleted: true };
  }

  // --- Analytics ---
  createAnalyticsEvent(event: AnalyticsEvent): AnalyticsEvent {
    this.analytics.push(event);
    return event;
  }
  getAnalytics(): AnalyticsEvent[] { return this.analytics; }
}
