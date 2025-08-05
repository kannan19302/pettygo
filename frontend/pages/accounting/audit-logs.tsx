import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/accounting/Sidebar';

import type { AuditLog } from '../../../apps/accounting/entities/audit-log.entity';
export default function AuditLogs() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  useEffect(() => {
    fetch('/api/accounting/audit-logs').then(r => r.json()).then(setLogs);
  }, []);
  return (
    <>
      <Head><title>Audit Log | Accounting</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/accounting/audit-logs" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Audit Log</h1>
          <table className="erp-table">
            <thead>
              <tr><th>ID</th><th>Action</th><th>Entity</th><th>User</th><th>Timestamp</th></tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.action}</td>
                  <td>{log.entity}</td>
                  <td>{log.user}</td>
                  <td>{log.timestamp}</td>
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
