import { useEffect, useState } from 'react';

export default function CasesPage() {
  const [cases, setCases] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/cases').then(r => r.json()).then(setCases);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Cases</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Subject</th><th>Description</th><th>Status</th><th>Contact</th><th>Account</th>
          </tr>
        </thead>
        <tbody>
          {cases.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.subject}</td>
              <td>{c.description}</td>
              <td>{c.status}</td>
              <td>{c.contactId}</td>
              <td>{c.accountId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
