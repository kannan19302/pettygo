import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const apps = [
  { name: 'HR', path: '/hr/dashboard', icon: '👩‍💼' },
  { name: 'CRM', path: '/crm', icon: '📇' },
  { name: 'Sales', path: '/sales', icon: '💰' },
  { name: 'Inventory', path: '/inventory', icon: '📦' },
  { name: 'Projects', path: '/projects', icon: '📁' },
  { name: 'Accounting', path: '/accounting', icon: '📊' },
  { name: 'POS', path: '/pos', icon: '🛒' },
  { name: 'Ecommerce', path: '/ecommerce', icon: '🛍️' },
  { name: 'Purchase', path: '/purchase', icon: '📝' },
  { name: 'Manufacturing', path: '/manufacturing', icon: '🏭' },
  { name: 'Marketplace', path: '/marketplace', icon: '🌐' },
  { name: 'Studio', path: '/studio', icon: '🎨' },
  { name: 'Admin Tools', path: '/admin-tools', icon: '🛡️' },
  { name: 'Website', path: '/website', icon: '🌍' },
  { name: 'Website Builder', path: '/website-builder', icon: '🧩' },
];

export default function Dashboard() {
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('hr-auth');
    const userRole = localStorage.getItem('hr-role');
    if (!isAuth) {
      router.replace('/login');
    } else {
      setRole(userRole || '');
    }
  }, [router]);

  function logout() {
    localStorage.removeItem('hr-auth');
    localStorage.removeItem('hr-role');
    router.replace('/login');
  }

  return (
    <>
      <Head><title>PettyGo ERP Dashboard</title></Head>
      <div className="erp-dashboard-page">
        <header className="erp-dashboard-header">
          <img src="/logo.svg" alt="PettyGo ERP" style={{ height: 40, marginRight: 16 }} />
          <h1>PettyGo ERP</h1>
          <div style={{ flex: 1 }} />
          <span className="erp-dashboard-role">{role}</span>
          <button className="erp-dashboard-logout" onClick={logout}>Logout</button>
        </header>
        <main className="erp-dashboard-main">
          <h2>Welcome to PettyGo ERP</h2>
          <p>Select an application to get started:</p>
          <div className="erp-dashboard-apps">
            {apps.map(app => (
              <a key={app.name} href={app.path} className="erp-dashboard-app">
                <span className="erp-dashboard-app-icon">{app.icon}</span>
                <span>{app.name}</span>
              </a>
            ))}
          </div>
        </main>
      </div>
      <style jsx>{`
        .erp-dashboard-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
        }
        .erp-dashboard-header {
          display: flex;
          align-items: center;
          padding: 1.2rem 2rem;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .erp-dashboard-header h1 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }
        .erp-dashboard-role {
          background: #e0e7ef;
          color: #0070f3;
          border-radius: 8px;
          padding: 0.4rem 1rem;
          margin-right: 1rem;
          font-weight: 600;
        }
        .erp-dashboard-logout {
          background: #f43f5e;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
        }
        .erp-dashboard-main {
          max-width: 900px;
          margin: 2.5rem auto;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          padding: 2.5rem 2rem;
        }
        .erp-dashboard-apps {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 2rem;
        }
        .erp-dashboard-app {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
          background: #f8fafc;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          text-decoration: none;
          color: #222;
          font-size: 1.1rem;
          font-weight: 500;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .erp-dashboard-app:hover {
          background: #e0e7ef;
          box-shadow: 0 4px 16px rgba(0,112,243,0.10);
        }
        .erp-dashboard-app-icon {
          font-size: 2.2rem;
          margin-bottom: 0.7rem;
        }
      `}</style>
    </>
  );
}
