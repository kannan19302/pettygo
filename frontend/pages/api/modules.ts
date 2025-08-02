import type { NextApiRequest, NextApiResponse } from 'next';

const modules = [
  {
    key: 'crm',
    name: 'CRM',
    description: 'Customer Relationship Management',
    icon: '/icons/crm.svg',
    route: '/crm',
  },
  {
    key: 'hr',
    name: 'HR',
    description: 'Human Resources',
    icon: '/icons/hr.svg',
    route: '/hr',
  },
  {
    key: 'sales',
    name: 'Sales',
    description: 'Sales Management',
    icon: '/icons/sales.svg',
    route: '/sales',
  },
  {
    key: 'inventory',
    name: 'Inventory',
    description: 'Inventory & Stock',
    icon: '/icons/inventory.svg',
    route: '/inventory',
  },
  {
    key: 'projects',
    name: 'Projects',
    description: 'Project Management',
    icon: '/icons/projects.svg',
    route: '/projects',
  },
  {
    key: 'accounting',
    name: 'Accounting',
    description: 'Finance & Accounting',
    icon: '/icons/accounting.svg',
    route: '/accounting',
  },
  {
    key: 'pos',
    name: 'POS',
    description: 'Point of Sale',
    icon: '/icons/pos.svg',
    route: '/pos',
  },
  {
    key: 'purchase',
    name: 'Purchase',
    description: 'Purchase Management',
    icon: '/icons/purchase.svg',
    route: '/purchase',
  },
  {
    key: 'manufacturing',
    name: 'Manufacturing',
    description: 'Manufacturing Operations',
    icon: '/icons/manufacturing.svg',
    route: '/manufacturing',
  },
  {
    key: 'marketplace',
    name: 'Marketplace',
    description: 'App Marketplace',
    icon: '/icons/marketplace.svg',
    route: '/marketplace',
  },
  {
    key: 'analytics',
    name: 'Analytics',
    description: 'Business Analytics',
    icon: '/icons/analytics.svg',
    route: '/analytics',
  },
  {
    key: 'studio',
    name: 'Studio',
    description: 'Automation Studio',
    icon: '/icons/studio.svg',
    route: '/studio',
  },
  {
    key: 'website-builder',
    name: 'Website Builder',
    description: 'No-code Website Builder',
    icon: '/icons/website-builder.svg',
    route: '/website-builder',
  },
  {
    key: 'contracts',
    name: 'Contracts',
    description: 'Contract Management',
    icon: '/icons/contracts.svg',
    route: '/contracts',
  },
  {
    key: 'ecommerce',
    name: 'Ecommerce',
    description: 'Ecommerce Platform',
    icon: '/icons/ecommerce.svg',
    route: '/ecommerce',
  },
  {
    key: 'website',
    name: 'Website',
    description: 'Website Pages',
    icon: '/icons/website.svg',
    route: '/website',
  },
];

const user = {
  name: 'Admin',
  role: 'Administrator',
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ modules, user });
}
