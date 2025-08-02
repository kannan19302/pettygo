import React from 'react';
import Head from 'next/head';

export default function Sales() {
  return (
    <>
      <Head><title>Sales | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/sales.svg" alt="Sales" className="erp-module-page-icon" />
        <h1>Sales</h1>
        <p>Sales Orders, Quotes, and Invoicing module coming soon.</p>
      </div>
    </>
  );
}
