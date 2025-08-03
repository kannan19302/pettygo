import { useEffect, useState } from 'react';

export default function AutomationsPage() {
  const [automations, setAutomations] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/automations').then(r => r.json()).then(setAutomations);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Automations</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Type</th><th>Config</th><th>Active</th>
          </tr>
        </thead>
        <tbody>
          {automations.map(auto => (
            <tr key={auto.id}>
              <td>{auto.id}</td>
              <td>{auto.name}</td>
              <td>{auto.type}</td>
              <td>{auto.config}</td>
              <td>{auto.active ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
