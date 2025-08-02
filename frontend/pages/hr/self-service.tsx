import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

// ...existing code...

export default function SelfService() {
  const [selfService, setSelfService] = useState<any[]>([]);
  const [role, setRole] = useState('');
  useEffect(() => {
    setRole(localStorage.getItem('hr-role') || '');
    fetch('/api/hr/self-service').then(r => r.json()).then(setSelfService);
  }, []);

  function updateProfile() {
    alert('Profile update is not yet available. Would you like to create it now?');
  }

  return (
    <>
      <Head><title>Employee Self-Service | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/self-service" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Employee Self-Service Portal</h1>
          <button onClick={updateProfile} style={{ marginBottom: 16 }}>Update My Profile</button>
          <table className="erp-table">
            <thead>
              <tr><th>Employee</th><th>Action</th><th>Status</th></tr>
            </thead>
            <tbody>
              {selfService.length === 0 ? (
                <tr><td colSpan={3} style={{ textAlign: 'center', color: '#888' }}>No records found.</td></tr>
              ) : selfService.map(s => (
                <tr key={s.id}>
                  <td>{s.employee}</td>
                  <td>{s.action}</td>
                  <td>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Want to enable more self-service features? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={updateProfile}>Let us know!</span>
          </div>
        </main>
      </div>
      <style jsx>{`
        .erp-table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        .erp-table th, .erp-table td { border: 1px solid #e5e7eb; padding: 0.7rem; }
        .erp-table th { background: #f8fafc; }
      `}</style>
    </>
  );
}
