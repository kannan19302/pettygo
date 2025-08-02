import { useEffect, useState } from 'react';

export default function DealsPage() {
  const [deals, setDeals] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/deals').then(r => r.json()).then(setDeals);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Deals</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Account</th><th>Value</th><th>Stage</th>
          </tr>
        </thead>
        <tbody>
          {deals.map(deal => (
            <tr key={deal.id}>
              <td>{deal.id}</td>
              <td>{deal.name}</td>
              <td>{deal.accountId}</td>
              <td>{deal.value}</td>
              <td>{deal.stage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
