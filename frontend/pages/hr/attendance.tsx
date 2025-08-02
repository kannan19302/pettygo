import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

const initialAttendance = [
  { id: 1, employee: 'Alice Johnson', date: '2025-08-01', status: 'Present', checkIn: '09:00', checkOut: '18:00', location: 'Office', ip: '192.168.1.10', approved: true },
  { id: 2, employee: 'Bob Smith', date: '2025-08-01', status: 'Absent', checkIn: '', checkOut: '', location: '', ip: '', approved: false },
];

export default function Attendance() {
  const [attendance, setAttendance] = useState(initialAttendance);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  useEffect(() => { setRole(localStorage.getItem('hr-role') || ''); }, []);

  const filtered = attendance.filter(a =>
    a.employee.toLowerCase().includes(search.toLowerCase()) ||
    a.date.includes(search)
  );

  function checkIn() {
    setAttendance([...attendance, { id: Date.now(), employee: 'You', date: new Date().toISOString().slice(0,10), status: 'Present', checkIn: '09:10', checkOut: '', location: 'Remote', ip: '127.0.0.1', approved: false }]);
  }
  function checkOut() {
    setAttendance(attendance.map(a => a.employee === 'You' && !a.checkOut ? { ...a, checkOut: '18:00' } : a));
  }
  function approve(id: number) {
    setAttendance(attendance.map(a => a.id === id ? { ...a, approved: true } : a));
  }
  function reject(id: number) {
    setAttendance(attendance.map(a => a.id === id ? { ...a, approved: false, status: 'Rejected' } : a));
  }

  return (
    <>
      <Head><title>Attendance | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/attendance" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Time & Attendance Tracking</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <input
              type="text"
              placeholder="Search by employee or date..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e5e7eb', minWidth: 220 }}
            />
            <div>
              <button onClick={checkIn} style={{ marginRight: 8 }}>Check In</button>
              <button onClick={checkOut}>Check Out</button>
            </div>
          </div>
          <table className="erp-table">
            <thead>
              <tr><th>Employee</th><th>Date</th><th>Status</th><th>Check-In</th><th>Check-Out</th><th>Location</th><th>IP</th><th>Approval</th></tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8} style={{ textAlign: 'center', color: '#888' }}>No records found.</td></tr>
              ) : filtered.map(a => (
                <tr key={a.id}>
                  <td>{a.employee}</td>
                  <td>{a.date}</td>
                  <td>{a.status}</td>
                  <td>{a.checkIn}</td>
                  <td>{a.checkOut}</td>
                  <td>{a.location}</td>
                  <td>{a.ip}</td>
                  <td>
                    {role === 'admin' || role === 'superadmin' ? (
                      a.approved ? <span style={{ color: 'green' }}>Approved</span> : <>
                        <button onClick={() => approve(a.id)} style={{ marginRight: 8 }}>Approve</button>
                        <button onClick={() => reject(a.id)}>Reject</button>
                      </>
                    ) : a.approved ? <span style={{ color: 'green' }}>Approved</span> : <span>Pending</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Want to enable geofencing or auto check-in reminders? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => alert('This feature is not yet available. Would you like to create it now?')}>Let us know!</span>
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
