import React from 'react';
import Head from 'next/head';

export default function Analytics() {
  return (
    <>
      <Head><title>Analytics | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/analytics.svg" alt="Analytics" className="erp-module-page-icon" />
        <h1>Analytics</h1>
        <p>Reports, Dashboards, and KPIs module coming soon.</p>
      </div>
    </>
  );
}
