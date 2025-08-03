// Removed duplicate import
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/crm/Sidebar';

export default function ContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editContact, setEditContact] = useState<any>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    fetch('/crm/contacts').then(r => r.json()).then(setContacts);
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (editContact) {
      await fetch(`/crm/contacts/${editContact.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/crm/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setModalOpen(false);
    setEditContact(null);
    setForm({ name: '', email: '', phone: '' });
    fetch('/crm/contacts').then(r => r.json()).then(setContacts);
  };

  const handleDelete = async (id: any) => {
    if (window.confirm('Delete this contact?')) {
      await fetch(`/crm/contacts/${id}`, { method: 'DELETE' });
      fetch('/crm/contacts').then(r => r.json()).then(setContacts);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <Sidebar active="/crm/contacts" />
      <main style={{ flex: 1, padding: 32 }}>
      <h2 style={{ marginBottom: 24 }}>Contacts</h2>
      <button style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px', marginBottom: 24 }} onClick={() => { setModalOpen(true); setEditContact(null); setForm({ name: '', email: '', phone: '' }); }}>+ New Contact</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {contacts.map(contact => (
          <div key={contact.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, position: 'relative' }}>
            <div style={{ fontWeight: 600, fontSize: 20 }}>{contact.name}</div>
            <div style={{ color: '#555', margin: '8px 0' }}>{contact.email}</div>
            <div style={{ color: '#888', fontSize: 14 }}>Phone: {contact.phone}</div>
            <div style={{ position: 'absolute', top: 16, right: 16 }}>
              <button style={{ marginRight: 8 }} onClick={() => { setEditContact(contact); setForm({ name: contact.name, email: contact.email, phone: contact.phone }); setModalOpen(true); }}>Edit</button>
              <button style={{ color: 'red' }} onClick={() => handleDelete(contact.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <form style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} onSubmit={handleSave}>
            <h3 style={{ marginBottom: 16 }}>{editContact ? 'Edit Contact' : 'New Contact'}</h3>
            <input placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
            <input placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
            <input placeholder="Phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
            <div style={{ display: 'flex', gap: 12 }}>
              <button type="submit" style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px' }}>{editContact ? 'Update' : 'Create'}</button>
              <button type="button" style={{ background: '#eee', borderRadius: 8, padding: '8px 20px' }} onClick={() => { setModalOpen(false); setEditContact(null); }}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      </main>
    </div>
  );
}
