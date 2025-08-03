import { useEffect, useState } from 'react';

export default function RolesPage() {
  const [roles, setRoles] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/roles').then(r => r.json()).then(setRoles);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>CRM Roles</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
