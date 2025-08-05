import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/accounting/Sidebar';

import type { JournalEntry } from '../../../apps/accounting/entities/journal-entry.entity';
export default function JournalEntries() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  useEffect(() => {
    fetch('/api/accounting/journal-entries').then(r => r.json()).then(setEntries);
  }, []);
  return (
    <>
      <Head><title>Journal Entries | Accounting</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/accounting/journal-entries" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Journal Entries</h1>
          <table className="erp-table">
            <thead>
              <tr><th>ID</th><th>Date</th><th>Description</th><th>Lines</th></tr>
            </thead>
            <tbody>
              {entries.map(entry => (
                <tr key={entry.id}>
                  <td>{entry.id}</td>
                  <td>{entry.date}</td>
                  <td>{entry.description}</td>
                  <td>{entry.lines.length}</td>
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
