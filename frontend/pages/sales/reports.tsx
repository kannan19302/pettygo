import React from 'react';
import Head from 'next/head';
import Sidebar from '../../components/sales/Sidebar';

export default function SalesReports() {
  // Placeholder for sales reports
  return (
    <>
      <Head><title>Reports | Sales</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/sales/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Sales Reports</h1>
          <p>Sales reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
