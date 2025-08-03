
import React, { useEffect, useState } from 'react';

type Location = {
  id: number;
  name: string;
  address?: string;
};

export default function LocationsPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchLocations = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/locations');
    if (res.ok) {
      setLocations(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        address,
      }),
    });
    if (res.ok) {
      setName('');
      setAddress('');
      fetchLocations();
    }
  };

  return (
    <div>
      <h1>Locations</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Name:
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Address:
          <input value={address} onChange={e => setAddress(e.target.value)} />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Location</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(l => (
              <tr key={l.id}>
                <td>{l.id}</td>
                <td>{l.name}</td>
                <td>{l.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
