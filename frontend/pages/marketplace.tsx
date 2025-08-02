import React from 'react';
import Head from 'next/head';

export default function Marketplace() {
  return (
    <>
      <Head><title>Marketplace | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/marketplace.svg" alt="Marketplace" className="erp-module-page-icon" />
        <h1>Marketplace</h1>
        <p>App Marketplace & Extensions module coming soon.</p>
      </div>
    </>
  );
}
