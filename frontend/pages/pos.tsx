import React from 'react';
import Head from 'next/head';

export default function POS() {
  return (
    <>
      <Head><title>POS | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/pos.svg" alt="POS" className="erp-module-page-icon" />
        <h1>POS</h1>
        <p>Point of Sale module coming soon.</p>
      </div>
    </>
  );
}
