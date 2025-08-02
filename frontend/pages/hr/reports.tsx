import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

const demoReports = [
  { id: 1, name: 'Monthly Attendance', type: 'Attendance', status: 'Ready' },
  { id: 2, name: 'Payroll Summary', type: 'Payroll', status: 'Ready' },
];

export default function Reports() {
  const [role, setRole] = useState('');
  useEffect(() => { setRole(localStorage.getItem('hr-role') || ''); }, []);

  return (
    <>
      <Head><title>Reports | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>HR Reports</h1>
          <table className="erp-table">
            <thead>
              <tr><th>Name</th><th>Type</th><th>Status</th></tr>
            </thead>
            <tbody>
              {demoReports.length === 0 ? (
                <tr><td colSpan={3} style={{ textAlign: 'center', color: '#888' }}>No reports found.</td></tr>
              ) : demoReports.map(r => (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.type}</td>
                  <td>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Want to generate custom reports or automate report scheduling? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => alert('This feature is not yet available. Would you like to create it now?')}>Let us know!</span>
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
