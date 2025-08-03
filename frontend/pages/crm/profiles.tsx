import { useEffect, useState } from 'react';

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/profiles').then(r => r.json()).then(setProfiles);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>CRM Profiles</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr key={profile.id}>
              <td>{profile.id}</td>
              <td>{profile.name}</td>
              <td>{profile.permissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
