import React, { useEffect, useState } from 'react';

export default function DealsPage() {
  const [deals, setDeals] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editDeal, setEditDeal] = useState<any>(null);
  const [form, setForm] = useState({ name: '', accountId: '', value: '', stage: '' });

  useEffect(() => {
    fetch('/crm/deals').then(r => r.json()).then(setDeals);
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (editDeal) {
      await fetch(`/crm/deals/${editDeal.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/crm/deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setModalOpen(false);
    setEditDeal(null);
    setForm({ name: '', accountId: '', value: '', stage: '' });
    fetch('/crm/deals').then(r => r.json()).then(setDeals);
  };

  const handleDelete = async (id: any) => {
    if (window.confirm('Delete this deal?')) {
      await fetch(`/crm/deals/${id}`, { method: 'DELETE' });
      fetch('/crm/deals').then(r => r.json()).then(setDeals);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <Sidebar active="/crm/deals" />
      <main style={{ flex: 1, padding: 32 }}>
        <h2 style={{ marginBottom: 24 }}>Deals</h2>
        <button style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px', marginBottom: 24 }} onClick={() => { setModalOpen(true); setEditDeal(null); setForm({ name: '', accountId: '', value: '', stage: '' }); }}>+ New Deal</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {deals.map(deal => (
            <div key={deal.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, position: 'relative' }}>
              <div style={{ fontWeight: 600, fontSize: 20 }}>{deal.name}</div>
              <div style={{ color: '#555', margin: '8px 0' }}>Account: {deal.accountId}</div>
              <div style={{ color: '#888', fontSize: 14 }}>Value: {deal.value}</div>
              <div style={{ color: '#888', fontSize: 14 }}>Stage: {deal.stage}</div>
              <div style={{ position: 'absolute', top: 16, right: 16 }}>
                <button style={{ marginRight: 8 }} onClick={() => { setEditDeal(deal); setForm({ name: deal.name, accountId: deal.accountId, value: deal.value, stage: deal.stage }); setModalOpen(true); }}>Edit</button>
                <button style={{ color: 'red' }} onClick={() => handleDelete(deal.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <form style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} onSubmit={handleSave}>
              <h3 style={{ marginBottom: 16 }}>{editDeal ? 'Edit Deal' : 'New Deal'}</h3>
              <input placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Account" value={form.accountId} onChange={e => setForm(f => ({ ...f, accountId: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Value" value={form.value} onChange={e => setForm(f => ({ ...f, value: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Stage" value={form.stage} onChange={e => setForm(f => ({ ...f, stage: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <div style={{ display: 'flex', gap: 12 }}>
                <button type="submit" style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px' }}>{editDeal ? 'Update' : 'Create'}</button>
                <button type="button" style={{ background: '#eee', borderRadius: 8, padding: '8px 20px' }} onClick={() => { setModalOpen(false); setEditDeal(null); }}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
