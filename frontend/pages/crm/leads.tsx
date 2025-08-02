import { useEffect, useState } from 'react';

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/leads').then(r => r.json()).then(setLeads);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Leads</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
