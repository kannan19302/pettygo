import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/accounting/Sidebar';

import type { Transaction } from '../../../apps/accounting/entities/transaction.entity';
export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    fetch('/api/accounting/transactions').then(r => r.json()).then(setTransactions);
  }, []);
  return (
    <>
      <Head><title>Transactions | Accounting</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/accounting/transactions" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Transactions</h1>
          <table className="erp-table">
            <thead>
              <tr><th>ID</th><th>Description</th><th>Amount</th><th>Type</th></tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id}>
                  <td>{tx.id}</td>
                  <td>{tx.description}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.type}</td>
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
