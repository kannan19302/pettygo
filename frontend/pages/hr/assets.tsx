
import React, { useEffect, useState } from 'react';

type Asset = {
  id: number;
  name: string;
  type: string;
  employeeId?: number;
  status: string;
};

export default function AssetsPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAssets = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/assets');
    if (res.ok) {
      setAssets(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/assets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        type,
        employeeId: employeeId ? Number(employeeId) : undefined,
      }),
    });
    if (res.ok) {
      setName('');
      setType('');
      setEmployeeId('');
      fetchAssets();
    }
  };

  return (
    <div>
      <h1>Assets</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Name:
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Type:
          <input value={type} onChange={e => setType(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Employee ID:
          <input value={employeeId} onChange={e => setEmployeeId(e.target.value)} type="number" />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Asset</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Employee ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(a => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.type}</td>
                <td>{a.employeeId}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
