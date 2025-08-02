import { useEffect, useState } from 'react';

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/analytics').then(r => r.json()).then(setAnalytics);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Analytics</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Type</th><th>Entity</th><th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {analytics.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.type}</td>
              <td>{event.entityType} #{event.entityId}</td>
              <td>{event.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
