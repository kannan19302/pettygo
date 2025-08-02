import React from 'react';
import Head from 'next/head';

const benefits = [
  { id: 1, employee: 'Alice Johnson', benefit: 'Health Insurance', status: 'Active' },
  { id: 2, employee: 'Bob Smith', benefit: 'Retirement Plan', status: 'Active' },
];

export default function Benefits() {
  return (
    <>
      <Head><title>Benefits | HR</title></Head>
      <div className="erp-module-page">
        <h1>Benefits Administration</h1>
        <table className="erp-table">
          <thead>
            <tr><th>Employee</th><th>Benefit</th><th>Status</th></tr>
          </thead>
          <tbody>
            {benefits.map(b => (
              <tr key={b.id}>
                <td>{b.employee}</td>
                <td>{b.benefit}</td>
                <td>{b.status}</td>
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
