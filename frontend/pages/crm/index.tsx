import React from 'react';
import Head from 'next/head';
import Sidebar from '../../components/crm/Sidebar';

export default function CrmDashboard() {
  return (
    <>
      <Head><title>CRM Dashboard</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
        <Sidebar active="/crm" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>CRM Dashboard</h1>
          {/* Graphical visualization placeholder */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: 16 }}>CRM Data Overview</h2>
            <div style={{ width: '100%', height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', borderRadius: 8 }}>
              <span style={{ color: '#888' }}>[Graph will be shown here]</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <a href="/crm/leads" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', textDecoration: 'none', color: '#333', display: 'block' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>🧑‍💼</div>
              <b>Leads</b>
            </a>
            <a href="/crm/contacts" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', textDecoration: 'none', color: '#333', display: 'block' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>📇</div>
              <b>Contacts</b>
            </a>
            <a href="/crm/accounts" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', textDecoration: 'none', color: '#333', display: 'block' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>🏢</div>
              <b>Accounts</b>
            </a>
            <a href="/crm/deals" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', textDecoration: 'none', color: '#333', display: 'block' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>💼</div>
              <b>Deals</b>
            </a>
            <a href="/crm/activities" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', textDecoration: 'none', color: '#333', display: 'block' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>📅</div>
              <b>Activities</b>
            </a>
            <a href="/crm/pipeline" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', textDecoration: 'none', color: '#333', display: 'block' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>🔗</div>
              <b>Pipeline</b>
            </a>
            <a href="/crm/contracts" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem', textDecoration: 'none', color: '#333', display: 'block' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>📜</div>
              <b>Contracts</b>
            </a>
          </div>
          <div style={{ marginTop: 48, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Looking for advanced features like document upload, bulk import, or custom fields? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => alert('This feature is not yet available. Would you like to create it now?')}>Let us know!</span>
          </div>
        </main>
      </div>
      <style jsx>{`
        a { transition: box-shadow 0.2s; }
        a:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
      `}</style>
    </>
  );
}
