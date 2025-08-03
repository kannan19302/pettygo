import { useEffect, useState } from 'react';

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/invoices').then(r => r.json()).then(setInvoices);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Invoices</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Subject</th><th>Account</th><th>Total</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.subject}</td>
              <td>{invoice.accountId}</td>
              <td>{invoice.total}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
