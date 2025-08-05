import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/accounting/Sidebar';

export default function AccountingDashboard() {
  return (
    <>
      <Head><title>Accounting | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/accounting" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Accounting Dashboard</h1>
          <p>Welcome to the advanced accounting module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
