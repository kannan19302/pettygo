
import React, { useEffect, useState } from 'react';

type Compliance = {
  id: number;
  policy: string;
  employeeId?: number;
  acknowledgedAt?: string;
};

export default function CompliancePage() {
  const [compliances, setCompliances] = useState<Compliance[]>([]);
  const [policy, setPolicy] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [acknowledgedAt, setAcknowledgedAt] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCompliances = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/compliances');
    if (res.ok) {
      setCompliances(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCompliances();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/compliances', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        policy,
        employeeId: employeeId ? Number(employeeId) : undefined,
        acknowledgedAt: acknowledgedAt ? acknowledgedAt : undefined,
      }),
    });
    if (res.ok) {
      setPolicy('');
      setEmployeeId('');
      setAcknowledgedAt('');
      fetchCompliances();
    }
  };

  return (
    <div>
      <h1>Compliance</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Policy:
          <input value={policy} onChange={e => setPolicy(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Employee ID:
          <input value={employeeId} onChange={e => setEmployeeId(e.target.value)} type="number" />
        </label>
        <label style={{ marginLeft: 12 }}>
          Acknowledged At:
          <input value={acknowledgedAt} onChange={e => setAcknowledgedAt(e.target.value)} type="date" />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Compliance</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Policy</th>
              <th>Employee ID</th>
              <th>Acknowledged At</th>
            </tr>
          </thead>
          <tbody>
            {compliances.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.policy}</td>
                <td>{c.employeeId}</td>
                <td>{c.acknowledgedAt?.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
