import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

// ...existing code...

export default function Performance() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  useEffect(() => {
    setRole(localStorage.getItem('hr-role') || '');
    fetch('/api/hr/performance').then(r => r.json()).then(setReviews);
  }, []);

  const filtered = reviews.filter(r =>
    r.employee.toLowerCase().includes(search.toLowerCase()) ||
    r.period.includes(search)
  );

  function addFeedback(id: number, feedback: string) {
    setReviews(reviews.map(r => r.id === id ? { ...r, feedback, status: 'Completed' } : r));
  }

  return (
    <>
      <Head><title>Performance Management | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/performance" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Performance Management</h1>
          <input
            type="text"
            placeholder="Search by employee or period..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e5e7eb', minWidth: 220, marginBottom: 24 }}
          />
          <table className="erp-table">
            <thead>
              <tr><th>Employee</th><th>Goal</th><th>Score</th><th>Period</th><th>Feedback</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} style={{ textAlign: 'center', color: '#888' }}>No reviews found.</td></tr>
              ) : filtered.map(r => (
                <tr key={r.id}>
                  <td>{r.employee}</td>
                  <td>{r.goal}</td>
                  <td>{r.score}</td>
                  <td>{r.period}</td>
                  <td>{r.feedback}</td>
                  <td>{r.status}</td>
                  <td>
                    {(role === 'admin' || role === 'superadmin') && r.status !== 'Completed' && (
                      <button onClick={() => addFeedback(r.id, 'Excellent')}>Complete</button>
                    )}
                    {role === 'user' && <span>View</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Want to automate review cycles or get feedback suggestions? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => alert('This feature is not yet available. Would you like to create it now?')}>Let us know!</span>
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
