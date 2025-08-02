import React from 'react';
import Head from 'next/head';

const jobs = [
  { id: 1, title: 'Software Engineer', status: 'Open' },
  { id: 2, title: 'HR Assistant', status: 'Closed' },
];

export default function Recruitment() {
  return (
    <>
      <Head><title>Recruitment | HR</title></Head>
      <div className="erp-module-page">
        <h1>Recruitment</h1>
        <table className="erp-table">
          <thead>
            <tr><th>Job Title</th><th>Status</th></tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.status}</td>
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
