import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

const initialLeaves = [
  { id: 1, employee: 'Alice Johnson', type: 'Annual', from: '2025-08-10', to: '2025-08-12', status: 'Pending', balance: 12 },
  { id: 2, employee: 'Bob Smith', type: 'Sick', from: '2025-08-05', to: '2025-08-06', status: 'Approved', balance: 8 },
];
const holidays = [
  { date: '2025-08-15', name: 'Independence Day' },
  { date: '2025-12-25', name: 'Christmas' },
];

export default function Leaves() {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [role, setRole] = useState('');
  const [search, setSearch] = useState('');
  const [type, setType] = useState('Annual');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  useEffect(() => { setRole(localStorage.getItem('hr-role') || ''); }, []);

  function applyLeave(e: React.FormEvent) {
    e.preventDefault();
    setLeaves([...leaves, { id: Date.now(), employee: 'You', type, from, to, status: 'Pending', balance: 10 }]);
    setType('Annual'); setFrom(''); setTo('');
  }
  function approveLeave(id: number) {
    setLeaves(leaves.map(l => l.id === id ? { ...l, status: 'Approved' } : l));
  }
  function rejectLeave(id: number) {
    setLeaves(leaves.map(l => l.id === id ? { ...l, status: 'Rejected' } : l));
  }

  const filtered = leaves.filter(l =>
    l.employee.toLowerCase().includes(search.toLowerCase()) ||
    l.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head><title>Leaves | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/leaves" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Leave Management</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <input
              type="text"
              placeholder="Search by employee or type..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e5e7eb', minWidth: 220 }}
            />
            {role === 'user' && (
              <form onSubmit={applyLeave} style={{ display: 'flex', gap: 8 }}>
                <select value={type} onChange={e => setType(e.target.value)}>
                  <option value="Annual">Annual</option>
                  <option value="Sick">Sick</option>
                  <option value="Casual">Casual</option>
                </select>
                <input type="date" value={from} onChange={e => setFrom(e.target.value)} required />
                <input type="date" value={to} onChange={e => setTo(e.target.value)} required />
                <button type="submit">Apply</button>
              </form>
            )}
          </div>
          <table className="erp-table">
            <thead>
              <tr><th>Employee</th><th>Type</th><th>From</th><th>To</th><th>Status</th><th>Balance</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} style={{ textAlign: 'center', color: '#888' }}>No leave records found.</td></tr>
              ) : filtered.map(l => (
                <tr key={l.id}>
                  <td>{l.employee}</td>
                  <td>{l.type}</td>
                  <td>{l.from}</td>
                  <td>{l.to}</td>
                  <td>{l.status}</td>
                  <td>{l.balance}</td>
                  <td>
                    {role === 'admin' || role === 'superadmin' ? (
                      l.status === 'Pending' ? <>
                        <button onClick={() => approveLeave(l.id)} style={{ marginRight: 8 }}>Approve</button>
                        <button onClick={() => rejectLeave(l.id)}>Reject</button>
                      </> : <span>{l.status}</span>
                    ) : <span>View</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Want to automate leave approval workflows or get leave recommendations? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => alert('This feature is not yet available. Would you like to create it now?')}>Let us know!</span>
          </div>
          <h3 style={{ marginTop: 32 }}>Holiday Calendar</h3>
          <ul>
            {holidays.map(h => (
              <li key={h.date}>{h.date}: {h.name}</li>
            ))}
          </ul>
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
