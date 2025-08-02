import React from 'react';
import Head from 'next/head';

export default function Inventory() {
  return (
    <>
      <Head><title>Inventory | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/inventory.svg" alt="Inventory" className="erp-module-page-icon" />
        <h1>Inventory</h1>
        <p>Stock, Warehousing, and Inventory Management module coming soon.</p>
      </div>
    </>
  );
}
