import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

const initialDocs = [
  { id: 1, employee: 'Alice Johnson', type: 'Offer Letter', name: 'Offer_Alice.pdf', status: 'Uploaded' },
  { id: 2, employee: 'Bob Smith', type: 'ID Proof', name: 'ID_Bob.pdf', status: 'Uploaded' },
];

export default function Documents() {
  const [docs, setDocs] = useState(initialDocs);
  const [role, setRole] = useState('');
  useEffect(() => { setRole(localStorage.getItem('hr-role') || ''); }, []);

  function uploadDoc() {
    alert('Document upload is not yet available. Would you like to create it now?');
  }

  return (
    <>
      <Head><title>Documents | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/documents" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Document Management</h1>
          {(role === 'admin' || role === 'superadmin') && (
            <button onClick={uploadDoc} style={{ marginBottom: 16 }}>Upload Document</button>
          )}
          <table className="erp-table">
            <thead>
              <tr><th>Employee</th><th>Type</th><th>Name</th><th>Status</th></tr>
            </thead>
            <tbody>
              {docs.length === 0 ? (
                <tr><td colSpan={4} style={{ textAlign: 'center', color: '#888' }}>No documents found.</td></tr>
              ) : docs.map(d => (
                <tr key={d.id}>
                  <td>{d.employee}</td>
                  <td>{d.type}</td>
                  <td>{d.name}</td>
                  <td>{d.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Want to enable document upload or automate document reminders? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={uploadDoc}>Let us know!</span>
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
