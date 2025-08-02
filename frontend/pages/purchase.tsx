import React from 'react';
import Head from 'next/head';

export default function Purchase() {
  return (
    <>
      <Head><title>Purchase | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/purchase.svg" alt="Purchase" className="erp-module-page-icon" />
        <h1>Purchase</h1>
        <p>Purchase Orders & Vendor Management module coming soon.</p>
      </div>
    </>
  );
}
