// API endpoint to list all installed ERP modules with role-based access
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

// Dummy data for modules (replace with DB/service integration)
const MODULES = [
  {
    key: 'crm',
    name: 'CRM',
    description: 'Customer Relationship Management',
    icon: '/icons/crm.svg',
    route: '/crm',
    roles: ['admin', 'sales', 'manager'],
  },
  {
    key: 'hr',
    name: 'HR',
    description: 'Human Resources & Employee Management',
    icon: '/icons/hr.svg',
    route: '/hr',
    roles: ['admin', 'hr', 'manager'],
  },
  {
    key: 'sales',
    name: 'Sales',
    description: 'Sales Orders, Quotes, and Invoicing',
    icon: '/icons/sales.svg',
    route: '/sales',
    roles: ['admin', 'sales', 'manager'],
  },
  {
    key: 'studio',
    name: 'Studio',
    description: 'No-code Customization Studio',
    icon: '/icons/studio.svg',
    route: '/studio',
    roles: ['admin', 'developer'],
  },
  {
    key: 'builder',
    name: 'Website Builder',
    description: 'Drag-and-drop Website Builder',
    icon: '/icons/builder.svg',
    route: '/website-builder',
    roles: ['admin', 'marketing'],
  },
  {
    key: 'accounting',
    name: 'Accounting',
    description: 'Manage finances and accounts',
    icon: '/icons/accounting.svg',
    route: '/accounting',
    roles: ['admin', 'finance'],
  },
  {
    key: 'inventory',
    name: 'Inventory',
    description: 'Stock, Warehousing, and Inventory Management',
    icon: '/icons/inventory.svg',
    route: '/inventory',
    roles: ['admin', 'inventory', 'manager'],
  },
  {
    key: 'projects',
    name: 'Projects',
    description: 'Project Management & Collaboration',
    icon: '/icons/projects.svg',
    route: '/projects',
    roles: ['admin', 'projects', 'manager'],
  },
  {
    key: 'pos',
    name: 'POS',
    description: 'Point of Sale',
    icon: '/icons/pos.svg',
    route: '/pos',
    roles: ['admin', 'sales', 'pos'],
  },
  {
    key: 'purchase',
    name: 'Purchase',
    description: 'Purchase Orders & Vendor Management',
    icon: '/icons/purchase.svg',
    route: '/purchase',
    roles: ['admin', 'purchase', 'manager'],
  },
  {
    key: 'manufacturing',
    name: 'Manufacturing',
    description: 'Manufacturing & Production',
    icon: '/icons/manufacturing.svg',
    route: '/manufacturing',
    roles: ['admin', 'manufacturing', 'manager'],
  },
  {
    key: 'marketplace',
    name: 'Marketplace',
    description: 'App Marketplace & Extensions',
    icon: '/icons/marketplace.svg',
    route: '/marketplace',
    roles: ['admin', 'developer'],
  },
  {
    key: 'analytics',
    name: 'Analytics',
    description: 'Reports, Dashboards, and KPIs',
    icon: '/icons/analytics.svg',
    route: '/analytics',
    roles: ['admin', 'manager', 'analytics'],
  },
];

@Controller('api/modules')
export class ModulesController {
  @Get()
  async getModules(@Req() req: Request) {
    // Simulate user from request (replace with real auth)
    const user = req['user'] || { name: 'Demo User', role: 'admin' };
    // Filter modules by user role
    const accessibleModules = MODULES.filter(m => m.roles.includes(user.role));
    return {
      user: { name: user.name, role: user.role },
      modules: accessibleModules,
    };
  }
}
