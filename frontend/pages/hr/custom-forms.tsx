
import React, { useEffect, useState } from 'react';

type CustomForm = {
  id: number;
  name: string;
  fields: string;
};

export default function CustomFormsPage() {
  const [forms, setForms] = useState<CustomForm[]>([]);
  const [name, setName] = useState('');
  const [fields, setFields] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchForms = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/custom-forms');
    if (res.ok) {
      setForms(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchForms();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/custom-forms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        fields,
      }),
    });
    if (res.ok) {
      setName('');
      setFields('');
      fetchForms();
    }
  };

  return (
    <div>
      <h1>Custom Forms</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Name:
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Fields (JSON Schema):
          <input value={fields} onChange={e => setFields(e.target.value)} required />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Form</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Fields</th>
            </tr>
          </thead>
          <tbody>
            {forms.map(f => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>{f.name}</td>
                <td>{f.fields}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
