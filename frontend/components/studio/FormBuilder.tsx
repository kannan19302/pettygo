import React, { useState } from 'react';

const fieldTypes = [
  { value: 'text', label: 'Text' },
  { value: 'number', label: 'Number' },
  { value: 'select', label: 'Select' },
  { value: 'date', label: 'Date' },
];

export default function FormBuilder({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState<any[]>([]);
  const [field, setField] = useState<any>({ name: '', label: '', type: 'text', required: false, options: '' });

  const addField = () => {
    setFields([...fields, { ...field, order: fields.length }]);
    setField({ name: '', label: '', type: 'text', required: false, options: '' });
  };

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit({ name, description, fields }); }} style={{ marginBottom: 32 }}>
      <h3>Create Custom Form</h3>
      <input placeholder="Form Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <div style={{ margin: '16px 0' }}>
        <strong>Add Field</strong><br />
        <input placeholder="Field Name" value={field.name} onChange={e => setField((f: any) => ({ ...f, name: e.target.value }))} required />
        <input placeholder="Label" value={field.label} onChange={e => setField((f: any) => ({ ...f, label: e.target.value }))} required />
        <select value={field.type} onChange={e => setField((f: any) => ({ ...f, type: e.target.value }))}>
          {fieldTypes.map(ft => <option key={ft.value} value={ft.value}>{ft.label}</option>)}
        </select>
        <label>
          <input type="checkbox" checked={field.required} onChange={e => setField((f: any) => ({ ...f, required: e.target.checked }))} /> Required
        </label>
        {field.type === 'select' && (
          <input placeholder="Options (comma separated)" value={field.options} onChange={e => setField((f: any) => ({ ...f, options: e.target.value }))} />
        )}
        <button type="button" onClick={addField} disabled={!field.name || !field.label}>Add Field</button>
      </div>
      <ul>
        {fields.map((f, i) => (
          <li key={i}>{f.label} ({f.type}) {f.required ? '[required]' : ''} {f.type === 'select' && f.options ? `[${f.options}]` : ''}</li>
        ))}
      </ul>
      <button type="submit" disabled={!name || fields.length === 0}>Create Form</button>
    </form>
  );
}
