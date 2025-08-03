import Sidebar from '../../components/crm/Sidebar';
import React, { useEffect, useState } from 'react';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editAccount, setEditAccount] = useState<any>(null);
  const [form, setForm] = useState({ name: '', industry: '', phone: '' });

  useEffect(() => {
    fetch('/crm/accounts').then(r => r.json()).then(setAccounts);
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (editAccount) {
      await fetch(`/crm/accounts/${editAccount.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/crm/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setModalOpen(false);
    setEditAccount(null);
    setForm({ name: '', industry: '', phone: '' });
    fetch('/crm/accounts').then(r => r.json()).then(setAccounts);
  };

  const handleDelete = async (id: any) => {
    if (window.confirm('Delete this account?')) {
      await fetch(`/crm/accounts/${id}`, { method: 'DELETE' });
      fetch('/crm/accounts').then(r => r.json()).then(setAccounts);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <Sidebar active="/crm/accounts" />
      <main style={{ flex: 1, padding: 32 }}>
        <h2 style={{ marginBottom: 24 }}>Accounts</h2>
        <button style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px', marginBottom: 24 }} onClick={() => { setModalOpen(true); setEditAccount(null); setForm({ name: '', industry: '', phone: '' }); }}>+ New Account</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {accounts.map(account => (
            <div key={account.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, position: 'relative' }}>
              <div style={{ fontWeight: 600, fontSize: 20 }}>{account.name}</div>
              <div style={{ color: '#555', margin: '8px 0' }}>{account.industry}</div>
              <div style={{ color: '#888', fontSize: 14 }}>Phone: {account.phone}</div>
              <div style={{ position: 'absolute', top: 16, right: 16 }}>
                <button style={{ marginRight: 8 }} onClick={() => { setEditAccount(account); setForm({ name: account.name, industry: account.industry, phone: account.phone }); setModalOpen(true); }}>Edit</button>
                <button style={{ color: 'red' }} onClick={() => handleDelete(account.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <form style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} onSubmit={handleSave}>
              <h3 style={{ marginBottom: 16 }}>{editAccount ? 'Edit Account' : 'New Account'}</h3>
              <input placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Industry" value={form.industry} onChange={e => setForm(f => ({ ...f, industry: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <div style={{ display: 'flex', gap: 12 }}>
                <button type="submit" style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px' }}>{editAccount ? 'Update' : 'Create'}</button>
                <button type="button" style={{ background: '#eee', borderRadius: 8, padding: '8px 20px' }} onClick={() => { setModalOpen(false); setEditAccount(null); }}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
