import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

const initialShifts = [
  { id: 1, name: 'Morning', start: '09:00', end: '17:00', assigned: ['Alice Johnson'] },
  { id: 2, name: 'Evening', start: '13:00', end: '21:00', assigned: ['Bob Smith'] },
];

export default function Shifts() {
  const [shifts, setShifts] = useState(initialShifts);
  const [role, setRole] = useState('');
  useEffect(() => { setRole(localStorage.getItem('hr-role') || ''); }, []);

  function assignShift(id: number, employee: string) {
    setShifts(shifts.map(s => s.id === id ? { ...s, assigned: [...s.assigned, employee] } : s));
  }

  return (
    <>
      <Head><title>Shifts & Roster | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/shifts" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Shift & Roster Management</h1>
          <table className="erp-table">
            <thead>
              <tr><th>Shift</th><th>Start</th><th>End</th><th>Assigned Employees</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {shifts.length === 0 ? (
                <tr><td colSpan={5} style={{ textAlign: 'center', color: '#888' }}>No shifts found.</td></tr>
              ) : shifts.map(s => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.start}</td>
                  <td>{s.end}</td>
                  <td>{s.assigned.join(', ')}</td>
                  <td>
                    {(role === 'admin' || role === 'superadmin') && (
                      <button onClick={() => assignShift(s.id, 'You')}>Assign Me</button>
                    )}
                    {role === 'user' && <span>View</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Want to automate shift assignment or get roster suggestions? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => alert('This feature is not yet available. Would you like to create it now?')}>Let us know!</span>
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
