import { useEffect, useState } from 'react';

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/quotes').then(r => r.json()).then(setQuotes);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Quotes</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Subject</th><th>Deal</th><th>Account</th><th>Total</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(quote => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.subject}</td>
              <td>{quote.dealId}</td>
              <td>{quote.accountId}</td>
              <td>{quote.total}</td>
              <td>{quote.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
