import React from 'react';
import Head from 'next/head';
import Sidebar from '../../components/hr/Sidebar';

export default function Payroll() {
  const [payrolls, setPayrolls] = React.useState<any[]>([]);
  React.useEffect(() => {
    fetch('/api/hr/payroll').then(r => r.json()).then(setPayrolls);
  }, []);
  return (
    <>
      <Head><title>Payroll | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/payroll" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Payroll</h1>
          <table className="erp-table">
            <thead>
              <tr><th>Employee</th><th>Amount</th><th>Period</th><th>Status</th></tr>
            </thead>
            <tbody>
              {payrolls.map(p => (
                <tr key={p.id}>
                  <td>{p.employeeId}</td>
                  <td>${p.amount}</td>
                  <td>{p.period}</td>
                  <td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
