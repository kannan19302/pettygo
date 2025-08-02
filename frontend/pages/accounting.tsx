import React from 'react';
import Head from 'next/head';

export default function Accounting() {
  return (
    <>
      <Head><title>Accounting | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/accounting.svg" alt="Accounting" className="erp-module-page-icon" />
        <h1>Accounting</h1>
        <p>Manage finances and accounts module coming soon.</p>
      </div>
    </>
  );
}
