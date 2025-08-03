import { useEffect, useState } from 'react';

export default function CallsPage() {
  const [calls, setCalls] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/calls').then(r => r.json()).then(setCalls);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Calls</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Subject</th><th>Phone</th><th>Type</th><th>Duration</th><th>Status</th><th>Related To</th>
          </tr>
        </thead>
        <tbody>
          {calls.map(call => (
            <tr key={call.id}>
              <td>{call.id}</td>
              <td>{call.subject}</td>
              <td>{call.phone}</td>
              <td>{call.callType}</td>
              <td>{call.duration}</td>
              <td>{call.status}</td>
              <td>{call.relatedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
