import React from 'react';
import Head from 'next/head';

export default function HR() {
  return (
    <>
      <Head><title>HR | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/hr.svg" alt="HR" className="erp-module-page-icon" />
        <h1>HR</h1>
        <p>Human Resources & Employee Management module coming soon.</p>
      </div>
    </>
  );
}
