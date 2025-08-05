import React from 'react';
import Head from 'next/head';
import Sidebar from '../../components/sales/Sidebar';

export default function Customers() {
  // Placeholder for customer list
  return (
    <>
      <Head><title>Customers | Sales</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/sales/customers" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Customers</h1>
          <p>Customer management coming soon.</p>
        </main>
      </div>
    </>
  );
}
