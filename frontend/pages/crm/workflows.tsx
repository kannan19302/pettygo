import { useEffect, useState } from 'react';

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/workflows').then(r => r.json()).then(setWorkflows);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Workflows</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Description</th><th>Active</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map(wf => (
            <tr key={wf.id}>
              <td>{wf.id}</td>
              <td>{wf.name}</td>
              <td>{wf.description}</td>
              <td>{wf.active ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
