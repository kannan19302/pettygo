import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateLeadDto, UpdateLeadDto } from './dto/lead.dto';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';
import { CreateAccountDto, UpdateAccountDto } from './dto/account.dto';
import { CreateDealDto, UpdateDealDto } from './dto/deal.dto';
import { CreateActivityDto, UpdateActivityDto } from './dto/activity.dto';
import { CreateEmailDto, UpdateEmailDto } from './dto/email.dto';
import { CreatePipelineDto, UpdatePipelineDto } from './dto/pipeline.dto';

@Injectable()
export class CrmService {
  private prisma = new PrismaClient();

  // --- Leads ---
  async createLead(createLeadDto: CreateLeadDto) {
    return await this.prisma.lead.create({ data: { ...createLeadDto } });
  }
  async getLeads() {
    return await this.prisma.lead.findMany();
  }
  async getLead(id: number) {
    return await this.prisma.lead.findUnique({ where: { id } });
  }
  async updateLead(id: number, dto: UpdateLeadDto) {
    return await this.prisma.lead.update({ where: { id }, data: dto });
  }
  async deleteLead(id: number) {
    await this.prisma.lead.delete({ where: { id } });
    return { deleted: true };
  }

  // --- Contacts ---
  async createContact(contact: CreateContactDto) {
    return await this.prisma.contact.create({ data: { ...contact } });
  }
  async getContacts() {
    return await this.prisma.contact.findMany();
  }
  async getContact(id: number) {
    return await this.prisma.contact.findUnique({ where: { id } });
  }
  async updateContact(id: number, update: UpdateContactDto) {
    return await this.prisma.contact.update({ where: { id }, data: { ...update } });
  }
  async deleteContact(id: number) {
    await this.prisma.contact.delete({ where: { id } });
    return { deleted: true };
  }

  // --- Accounts ---
  async createAccount(account: CreateAccountDto) {
    return await this.prisma.account.create({ data: { ...account } });
  }
  async getAccounts() {
    return await this.prisma.account.findMany();
  }
  async getAccount(id: number) {
    return await this.prisma.account.findUnique({ where: { id } });
  }
  async updateAccount(id: number, update: UpdateAccountDto) {
    return await this.prisma.account.update({ where: { id }, data: { ...update } });
  }
  async deleteAccount(id: number) {
    await this.prisma.account.delete({ where: { id } });
    return { deleted: true };
  }

  // --- Deals ---
  async createDeal(deal: CreateDealDto) {
    return await this.prisma.deal.create({ data: { ...deal } });
  }
  async getDeals() {
    return await this.prisma.deal.findMany();
  }
  async getDeal(id: number) {
    return await this.prisma.deal.findUnique({ where: { id } });
  }
  async updateDeal(id: number, update: UpdateDealDto) {
    return await this.prisma.deal.update({ where: { id }, data: { ...update } });
  }
  async deleteDeal(id: number) {
    await this.prisma.deal.delete({ where: { id } });
    return { deleted: true };
  }

  // --- Activities ---
  async createActivity(activity: CreateActivityDto) {
    return await this.prisma.activity.create({ data: { ...activity } });
  }
  async getActivities() {
    return await this.prisma.activity.findMany();
  }
  async getActivity(id: number) {
    return await this.prisma.activity.findUnique({ where: { id } });
  }
  async updateActivity(id: number, update: UpdateActivityDto) {
    return await this.prisma.activity.update({ where: { id }, data: { ...update } });
  }
  async deleteActivity(id: number) {
    await this.prisma.activity.delete({ where: { id } });
    return { deleted: true };
  }

  // --- Notes ---
  async createNote(note: { content: string; ownerId?: number; relatedTo?: string }) {
    return await this.prisma.note.create({ data: note });
  }
  async getNotes() {
    return await this.prisma.note.findMany();
  }
  async getNote(id: number) {
    return await this.prisma.note.findUnique({ where: { id } });
  }
  async updateNote(id: number, update: Partial<{ content: string; ownerId?: number; relatedTo?: string }>) {
    return await this.prisma.note.update({ where: { id }, data: update });
  }
  async deleteNote(id: number) {
    await this.prisma.note.delete({ where: { id } });
    return { deleted: true };
  }

  // --- Email Logs ---
  async createEmail(email: CreateEmailDto) {
    return await this.prisma.email.create({ data: { ...email } });
  }
  async getEmails() {
    return await this.prisma.email.findMany();
  }
  async getEmail(id: number) {
    return await this.prisma.email.findUnique({ where: { id } });
  }
  async deleteEmail(id: number) {
    await this.prisma.email.delete({ where: { id } });
    return { deleted: true };
  }

  // --- Pipeline ---
  async createPipelineStage(stage: CreatePipelineDto) {
    return await this.prisma.pipelineStage.create({ data: { ...stage } });
  }
  async getPipeline() {
    return await this.prisma.pipelineStage.findMany();
  }
  async updatePipelineStage(id: number, update: UpdatePipelineDto) {
    return await this.prisma.pipelineStage.update({ where: { id }, data: { ...update } });
  }
  async deletePipelineStage(id: number) {
    await this.prisma.pipelineStage.delete({ where: { id } });
    return { deleted: true };
  }

  // --- Analytics ---
  // Analytics: Not present in Prisma schema, remove or refactor as needed
}
