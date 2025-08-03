
import React, { useEffect, useState } from 'react';

type Compensation = {
  id: number;
  employeeId: number;
  type: string;
  amount: number;
  effectiveDate: string;
  status: string;
};

export default function CompensationPage() {
  const [compensations, setCompensations] = useState<Compensation[]>([]);
  const [employeeId, setEmployeeId] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCompensations = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/compensations');
    if (res.ok) {
      setCompensations(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCompensations();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/compensations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        employeeId: Number(employeeId),
        type,
        amount: Number(amount),
        effectiveDate,
      }),
    });
    if (res.ok) {
      setEmployeeId('');
      setType('');
      setAmount('');
      setEffectiveDate('');
      fetchCompensations();
    }
  };

  return (
    <div>
      <h1>Compensation</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Employee ID:
          <input value={employeeId} onChange={e => setEmployeeId(e.target.value)} required type="number" />
        </label>
        <label style={{ marginLeft: 12 }}>
          Type:
          <input value={type} onChange={e => setType(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Amount:
          <input value={amount} onChange={e => setAmount(e.target.value)} required type="number" />
        </label>
        <label style={{ marginLeft: 12 }}>
          Effective Date:
          <input value={effectiveDate} onChange={e => setEffectiveDate(e.target.value)} required type="date" />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Compensation</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Effective Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {compensations.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.employeeId}</td>
                <td>{c.type}</td>
                <td>{c.amount}</td>
                <td>{c.effectiveDate?.slice(0, 10)}</td>
                <td>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
