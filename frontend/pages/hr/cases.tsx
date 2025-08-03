
import React, { useEffect, useState } from 'react';

type Case = {
  id: number;
  employeeId: number;
  subject: string;
  description: string;
  status: string;
  createdAt: string;
};

export default function CasesPage() {
  const [cases, setCases] = useState<Case[]>([]);
  const [employeeId, setEmployeeId] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCases = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/cases');
    if (res.ok) {
      setCases(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/cases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        employeeId: Number(employeeId),
        subject,
        description,
      }),
    });
    if (res.ok) {
      setEmployeeId('');
      setSubject('');
      setDescription('');
      fetchCases();
    }
  };

  return (
    <div>
      <h1>HR Cases</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Employee ID:
          <input value={employeeId} onChange={e => setEmployeeId(e.target.value)} required type="number" />
        </label>
        <label style={{ marginLeft: 12 }}>
          Subject:
          <input value={subject} onChange={e => setSubject(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Description:
          <input value={description} onChange={e => setDescription(e.target.value)} required />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Case</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee ID</th>
              <th>Subject</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {cases.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.employeeId}</td>
                <td>{c.subject}</td>
                <td>{c.description}</td>
                <td>{c.status}</td>
                <td>{c.createdAt?.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
