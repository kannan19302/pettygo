import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

const demoKpis = {
  totalEmployees: 24,
  presentToday: 21,
  pendingLeaves: 3,
  payrollStatus: 'Processed',
};

const notifications = [
  { id: 1, type: 'leave', message: '2 leave requests pending approval.' },
  { id: 2, type: 'holiday', message: 'Independence Day on Aug 15.' },
  { id: 3, type: 'announcement', message: 'Performance review cycle starts next week.' },
];

export default function HRDashboard() {
  const [role, setRole] = useState('');
  useEffect(() => {
    setRole(localStorage.getItem('hr-role') || '');
  }, []);

  return (
    <>
      <Head><title>HR Dashboard | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/dashboard" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>HR Dashboard</h1>
          <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
            <div className="erp-kpi-card"><b>Total Employees</b><div>{demoKpis.totalEmployees}</div></div>
            <div className="erp-kpi-card"><b>Present Today</b><div>{demoKpis.presentToday}</div></div>
            <div className="erp-kpi-card"><b>Pending Leaves</b><div>{demoKpis.pendingLeaves}</div></div>
            <div className="erp-kpi-card"><b>Payroll Status</b><div>{demoKpis.payrollStatus}</div></div>
          </div>
          <h3>Notifications</h3>
          <ul style={{ marginBottom: 32 }}>
            {notifications.map(n => (
              <li key={n.id} style={{ marginBottom: 8 }}>{n.message}</li>
            ))}
          </ul>
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Need help with HR workflows or want to automate reminders? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => alert('This feature is not yet available. Would you like to create it now?')}>Let us know!</span>
          </div>
        </main>
      </div>
      <style jsx>{`
        .erp-kpi-card { background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 1.2rem 2rem; min-width: 160px; text-align: center; font-size: 1.1rem; }
      `}</style>
    </>
  );
}
