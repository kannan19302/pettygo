import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/accounting/Sidebar';

import type { Account } from '../../../apps/accounting/entities/account.entity';
export default function Reports() {
  const [balanceSheet, setBalanceSheet] = useState<{ assets: Account[]; liabilities: Account[]; equity: Account[] }>({ assets: [], liabilities: [], equity: [] });
  const [incomeStatement, setIncomeStatement] = useState<{ income: Account[]; expenses: Account[] }>({ income: [], expenses: [] });
  const [trialBalance, setTrialBalance] = useState<Account[]>([]);

  useEffect(() => {
    fetch('/api/accounting/reports/balance-sheet').then(r => r.json()).then(setBalanceSheet);
    fetch('/api/accounting/reports/income-statement').then(r => r.json()).then(setIncomeStatement);
    fetch('/api/accounting/reports/trial-balance').then(r => r.json()).then(setTrialBalance);
  }, []);

  return (
    <>
      <Head><title>Reports | Accounting</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/accounting/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Reports</h1>
          <section>
            <h2>Balance Sheet</h2>
            <div>
              <strong>Assets:</strong> {balanceSheet.assets.length}<br />
              <strong>Liabilities:</strong> {balanceSheet.liabilities.length}<br />
              <strong>Equity:</strong> {balanceSheet.equity.length}
            </div>
          </section>
          <section>
            <h2>Income Statement</h2>
            <div>
              <strong>Income:</strong> {incomeStatement.income.length}<br />
              <strong>Expenses:</strong> {incomeStatement.expenses.length}
            </div>
          </section>
          <section>
            <h2>Trial Balance</h2>
            <table className="erp-table">
              <thead>
                <tr><th>Account</th><th>Type</th><th>Balance</th></tr>
              </thead>
              <tbody>
                {trialBalance.map(tb => (
                  <tr key={tb.id}>
                    <td>{tb.name}</td>
                    <td>{tb.type}</td>
                    <td>{tb.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
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
