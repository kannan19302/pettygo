
import React, { useEffect, useState } from 'react';

type Training = {
  id: number;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
};

export default function TrainingPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTrainings = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/trainings');
    if (res.ok) {
      setTrainings(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/trainings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        description,
        startDate,
        endDate,
      }),
    });
    if (res.ok) {
      setName('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      fetchTrainings();
    }
  };

  return (
    <div>
      <h1>Training</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Name:
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Description:
          <input value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <label style={{ marginLeft: 12 }}>
          Start Date:
          <input value={startDate} onChange={e => setStartDate(e.target.value)} required type="date" />
        </label>
        <label style={{ marginLeft: 12 }}>
          End Date:
          <input value={endDate} onChange={e => setEndDate(e.target.value)} required type="date" />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Training</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map(t => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.description}</td>
                <td>{t.startDate?.slice(0, 10)}</td>
                <td>{t.endDate?.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
