
import React, { useEffect, useState } from 'react';

type Offboarding = {
  id: number;
  employeeId: number;
  endDate: string;
  checklist?: string;
  status: string;
};

export default function OffboardingPage() {
  const [offboardings, setOffboardings] = useState<Offboarding[]>([]);
  const [employeeId, setEmployeeId] = useState('');
  const [endDate, setEndDate] = useState('');
  const [checklist, setChecklist] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchOffboardings = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/offboardings');
    if (res.ok) {
      setOffboardings(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOffboardings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/offboardings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        employeeId: Number(employeeId),
        endDate,
        checklist,
      }),
    });
    if (res.ok) {
      setEmployeeId('');
      setEndDate('');
      setChecklist('');
      fetchOffboardings();
    }
  };

  return (
    <div>
      <h1>Offboarding</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Employee ID:
          <input value={employeeId} onChange={e => setEmployeeId(e.target.value)} required type="number" />
        </label>
        <label style={{ marginLeft: 12 }}>
          End Date:
          <input value={endDate} onChange={e => setEndDate(e.target.value)} required type="date" />
        </label>
        <label style={{ marginLeft: 12 }}>
          Checklist:
          <input value={checklist} onChange={e => setChecklist(e.target.value)} />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Offboarding</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 800 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee ID</th>
              <th>End Date</th>
              <th>Checklist</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {offboardings.map(o => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.employeeId}</td>
                <td>{o.endDate?.slice(0, 10)}</td>
                <td>{o.checklist}</td>
                <td>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
