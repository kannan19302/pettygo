import { useEffect, useState } from 'react';

export default function DocumentsPage() {
  const [docs, setDocs] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/documents').then(r => r.json()).then(setDocs);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>CRM Documents</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>URL</th><th>Related To</th>
          </tr>
        </thead>
        <tbody>
          {docs.map(doc => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.url}</td>
              <td>{doc.relatedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
