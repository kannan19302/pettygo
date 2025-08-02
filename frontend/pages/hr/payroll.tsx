import React from 'react';
import Head from 'next/head';

const payrolls = [
  { id: 1, employee: 'Alice Johnson', amount: 5000, month: 'July 2025', status: 'Paid' },
  { id: 2, employee: 'Bob Smith', amount: 4000, month: 'July 2025', status: 'Pending' },
];

export default function Payroll() {
  return (
    <>
      <Head><title>Payroll | HR</title></Head>
      <div className="erp-module-page">
        <h1>Payroll</h1>
        <table className="erp-table">
          <thead>
            <tr><th>Employee</th><th>Amount</th><th>Month</th><th>Status</th></tr>
          </thead>
          <tbody>
            {payrolls.map(p => (
              <tr key={p.id}>
                <td>{p.employee}</td>
                <td>${p.amount}</td>
                <td>{p.month}</td>
                <td>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .erp-module-page { padding: 2rem; }
        .erp-table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        .erp-table th, .erp-table td { border: 1px solid #e5e7eb; padding: 0.7rem; }
        .erp-table th { background: #f8fafc; }
      `}</style>
    </>
  );
}
