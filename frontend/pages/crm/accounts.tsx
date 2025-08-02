import { useEffect, useState } from 'react';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/accounts').then(r => r.json()).then(setAccounts);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Accounts</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Industry</th><th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.name}</td>
              <td>{account.industry}</td>
              <td>{account.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
