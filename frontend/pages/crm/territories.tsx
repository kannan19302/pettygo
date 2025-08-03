import { useEffect, useState } from 'react';

export default function TerritoriesPage() {
  const [territories, setTerritories] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/territories').then(r => r.json()).then(setTerritories);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Territories</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {territories.map(territory => (
            <tr key={territory.id}>
              <td>{territory.id}</td>
              <td>{territory.name}</td>
              <td>{territory.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
