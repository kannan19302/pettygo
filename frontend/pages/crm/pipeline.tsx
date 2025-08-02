import { useEffect, useState } from 'react';

export default function PipelinePage() {
  const [stages, setStages] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/pipeline').then(r => r.json()).then(setStages);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Pipeline</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Order</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {stages.map(stage => (
            <tr key={stage.id}>
              <td>{stage.id}</td>
              <td>{stage.name}</td>
              <td>{stage.order}</td>
              <td>{stage.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
