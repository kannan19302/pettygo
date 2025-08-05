import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/accounting/Sidebar';

import type { Ledger } from '../../../apps/accounting/entities/ledger.entity';
export default function Ledgers() {
  const [ledgers, setLedgers] = useState<Ledger[]>([]);
  useEffect(() => {
    fetch('/api/accounting/ledgers').then(r => r.json()).then(setLedgers);
  }, []);
  return (
    <>
      <Head><title>Ledgers | Accounting</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/accounting/ledgers" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Ledgers</h1>
          <table className="erp-table">
            <thead>
              <tr><th>ID</th><th>Account</th><th>Period</th><th>Opening</th><th>Closing</th><th>Currency</th></tr>
            </thead>
            <tbody>
              {ledgers.map(l => (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.accountId}</td>
                  <td>{l.period}</td>
                  <td>{l.openingBalance}</td>
                  <td>{l.closingBalance}</td>
                  <td>{l.currency}</td>
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
