import React from 'react';
import Head from 'next/head';

const onboardingList = [
  { id: 1, name: 'Alice Johnson', status: 'Completed' },
  { id: 2, name: 'Bob Smith', status: 'In Progress' },
];

export default function Onboarding() {
  return (
    <>
      <Head><title>Onboarding | HR</title></Head>
      <div className="erp-module-page">
        <h1>Onboarding</h1>
        <table className="erp-table">
          <thead>
            <tr><th>Employee</th><th>Status</th></tr>
          </thead>
          <tbody>
            {onboardingList.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.status}</td>
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
