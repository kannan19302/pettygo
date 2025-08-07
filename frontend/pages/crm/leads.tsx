import Sidebar from '../../components/crm/Sidebar';
import React, { useState, useEffect } from 'react';

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editLead, setEditLead] = useState<any>(null);
  const [form, setForm] = useState({ name: '', email: '', status: '' });

  useEffect(() => {
    fetch('/crm/leads').then(r => r.json()).then(setLeads);
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (editLead) {
      await fetch(`/crm/leads/${editLead.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/crm/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setModalOpen(false);
    setEditLead(null);
    setForm({ name: '', email: '', status: '' });
    fetch('/crm/leads').then(r => r.json()).then(setLeads);
  };

  const handleDelete = async (id: any) => {
    if (window.confirm('Delete this lead?')) {
      await fetch(`/crm/leads/${id}`, { method: 'DELETE' });
      fetch('/crm/leads').then(r => r.json()).then(setLeads);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <Sidebar active="/crm/leads" />
      <main style={{ flex: 1, padding: 32 }}>
        <h2 style={{ marginBottom: 24 }}>Leads</h2>
        <button style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px', marginBottom: 24 }} onClick={() => { setModalOpen(true); setEditLead(null); setForm({ name: '', email: '', status: '' }); }}>+ New Lead</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {leads.map(lead => (
            <div key={lead.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, position: 'relative' }}>
              <div style={{ fontWeight: 600, fontSize: 20 }}>{lead.name}</div>
              <div style={{ color: '#555', margin: '8px 0' }}>{lead.email}</div>
              <div style={{ color: '#888', fontSize: 14 }}>Status: {lead.status}</div>
              <div style={{ position: 'absolute', top: 16, right: 16 }}>
                <button style={{ marginRight: 8 }} onClick={() => { setEditLead(lead); setForm({ name: lead.name, email: lead.email, status: lead.status }); setModalOpen(true); }}>Edit</button>
                <button style={{ color: 'red' }} onClick={() => handleDelete(lead.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <form style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} onSubmit={handleSave}>
              <h3 style={{ marginBottom: 16 }}>{editLead ? 'Edit Lead' : 'New Lead'}</h3>
              <input placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Status" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <div style={{ display: 'flex', gap: 12 }}>
                <button type="submit" style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px' }}>{editLead ? 'Update' : 'Create'}</button>
                <button type="button" style={{ background: '#eee', borderRadius: 8, padding: '8px 20px' }} onClick={() => { setModalOpen(false); setEditLead(null); }}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
// ...existing code...
