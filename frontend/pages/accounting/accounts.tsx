import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/accounting/Sidebar';

import type { Account } from '../../../apps/accounting/entities/account.entity';
export default function Accounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  useEffect(() => {
    fetch('/api/accounting/accounts').then(r => r.json()).then(setAccounts);
  }, []);
  return (
    <>
      <Head><title>Chart of Accounts | Accounting</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/accounting/accounts" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Chart of Accounts</h1>
          <table className="erp-table">
            <thead>
              <tr><th>ID</th><th>Code</th><th>Name</th><th>Type</th><th>Currency</th></tr>
            </thead>
            <tbody>
              {accounts.map(acc => (
                <tr key={acc.id}>
                  <td>{acc.id}</td>
                  <td>{acc.code}</td>
                  <td>{acc.name}</td>
                  <td>{acc.type}</td>
                  <td>{acc.currency}</td>
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
