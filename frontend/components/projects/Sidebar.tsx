import React from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Go to Home', href: '/pettygo', icon: '🏠' },
  { label: 'Dashboard', href: '/projects', icon: '📊' },
  { label: 'Projects', href: '/projects/list', icon: '🗂️' },
  { label: 'Reports', href: '/projects/reports', icon: '📈' },
];

export default function Sidebar({ active }: { active?: string }) {
  return (
    <aside className="erp-projects-sidebar">
      <div className="erp-projects-sidebar-header">Projects</div>
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
        .erp-projects-sidebar {
          width: 220px;
          background: var(--erp-sidebar-bg, #f8fafc);
          border-right: 1.5px solid #e5e7eb;
          min-height: 100vh;
          padding: 1.5rem 0.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .erp-projects-sidebar-header {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }
        nav a {
          display: flex;
          align-items: center;
          padding: 0.7rem 0.5rem;
          border-radius: 8px;
          color: #222;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: background 0.2s;
        }
        nav a.active, nav a:hover {
          background: #e0e7ef;
        }
        .icon {
          margin-right: 0.7rem;
          font-size: 1.2rem;
        }
      `}</style>
    </aside>
  );
}
