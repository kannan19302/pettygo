import React from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Dashboard', href: '/crm', icon: '📊' },
  { label: 'Leads', href: '/crm/leads', icon: '🧑‍💼' },
  { label: 'Contacts', href: '/crm/contacts', icon: '📇' },
  { label: 'Accounts', href: '/crm/accounts', icon: '🏢' },
  { label: 'Deals', href: '/crm/deals', icon: '💼' },
  { label: 'Activities', href: '/crm/activities', icon: '📅' },
  { label: 'Pipeline', href: '/crm/pipeline', icon: '🔗' },
  { label: 'Contracts', href: '/crm/contracts', icon: '📜' },
];

export default function Sidebar({ active }: { active?: string }) {
  return (
    <aside className="erp-crm-sidebar">
      <div className="erp-crm-sidebar-header">CRM</div>
      <nav>
        {navItems.map(item => (
          <Link key={item.href} href={item.href} legacyBehavior>
            <a className={active === item.href ? 'active' : ''}>
              <span className="icon">{item.icon}</span>
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
      <style jsx>{`
        .erp-crm-sidebar {
          width: 220px;
          background: var(--erp-sidebar-bg, #f8fafc);
          border-right: 1.5px solid #e5e7eb;
          min-height: 100vh;
          padding: 1.5rem 0.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .erp-crm-sidebar-header {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }
        nav a {
          display: flex;
          align-items: center;
          padding: 0.7rem 1rem;
          border-radius: 8px;
          color: #333;
          text-decoration: none;
          margin-bottom: 0.5rem;
          font-size: 1.08rem;
        }
        nav a.active {
          background: #e0e7ff;
          color: #0070f3;
          font-weight: bold;
        }
        .icon {
          margin-right: 0.7rem;
          font-size: 1.2rem;
        }
      `}</style>
    </aside>
  );
}
