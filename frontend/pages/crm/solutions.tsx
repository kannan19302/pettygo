import { useEffect, useState } from 'react';

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/solutions').then(r => r.json()).then(setSolutions);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Solutions</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Content</th>
          </tr>
        </thead>
        <tbody>
          {solutions.map(sol => (
            <tr key={sol.id}>
              <td>{sol.id}</td>
              <td>{sol.title}</td>
              <td>{sol.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
