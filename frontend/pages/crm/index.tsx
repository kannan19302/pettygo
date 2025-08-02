import { useEffect, useState } from 'react';

interface Lead {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  status?: string;
}

export default function CrmLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [form, setForm] = useState<Partial<Lead>>({});

  useEffect(() => {
    fetch('/api/crm/leads')
      .then(res => res.json())
      .then(setLeads);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/crm/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const newLead = await res.json();
    setLeads([...leads, newLead]);
    setForm({});
  };

  return (
    <div>
      <h1>CRM Leads</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input name="name" placeholder="Name" value={form.name || ''} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email || ''} onChange={handleChange} required />
        <input name="company" placeholder="Company" value={form.company || ''} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone || ''} onChange={handleChange} />
        <input name="status" placeholder="Status" value={form.status || ''} onChange={handleChange} />
        <button type="submit">Add Lead</button>
      </form>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Company</th><th>Phone</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.company}</td>
              <td>{lead.phone}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
