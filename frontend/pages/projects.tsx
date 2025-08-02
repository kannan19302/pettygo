import React from 'react';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head><title>Projects | PettyGo ERP</title></Head>
      <div className="erp-module-page">
        <img src="/icons/projects.svg" alt="Projects" className="erp-module-page-icon" />
        <h1>Projects</h1>
        <p>Project Management & Collaboration module coming soon.</p>
      </div>
    </>
  );
}
