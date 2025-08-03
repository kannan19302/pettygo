import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/crm/Sidebar';

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editActivity, setEditActivity] = useState<any>(null);
  const [form, setForm] = useState({ type: '', subject: '', dueDate: '', completed: false });

  useEffect(() => {
    fetch('/crm/activities').then(r => r.json()).then(setActivities);
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (editActivity) {
      await fetch(`/crm/activities/${editActivity.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/crm/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setModalOpen(false);
    setEditActivity(null);
    setForm({ type: '', subject: '', dueDate: '', completed: false });
    fetch('/crm/activities').then(r => r.json()).then(setActivities);
  };

  const handleDelete = async (id: any) => {
    if (window.confirm('Delete this activity?')) {
      await fetch(`/crm/activities/${id}`, { method: 'DELETE' });
      fetch('/crm/activities').then(r => r.json()).then(setActivities);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <Sidebar active="/crm/activities" />
      <main style={{ flex: 1, padding: 32 }}>
      <h2 style={{ marginBottom: 24 }}>Activities</h2>
      <button style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px', marginBottom: 24 }} onClick={() => { setModalOpen(true); setEditActivity(null); setForm({ type: '', subject: '', dueDate: '', completed: false }); }}>+ New Activity</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {activities.map(activity => (
          <div key={activity.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, position: 'relative' }}>
            <div style={{ fontWeight: 600, fontSize: 20 }}>{activity.subject}</div>
            <div style={{ color: '#555', margin: '8px 0' }}>{activity.type}</div>
            <div style={{ color: '#888', fontSize: 14 }}>Due: {activity.dueDate}</div>
            <div style={{ color: '#888', fontSize: 14 }}>Completed: {activity.completed ? 'Yes' : 'No'}</div>
            <div style={{ position: 'absolute', top: 16, right: 16 }}>
              <button style={{ marginRight: 8 }} onClick={() => { setEditActivity(activity); setForm({ type: activity.type, subject: activity.subject, dueDate: activity.dueDate, completed: activity.completed }); setModalOpen(true); }}>Edit</button>
              <button style={{ color: 'red' }} onClick={() => handleDelete(activity.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <form style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} onSubmit={handleSave}>
            <h3 style={{ marginBottom: 16 }}>{editActivity ? 'Edit Activity' : 'New Activity'}</h3>
            <input placeholder="Type" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
            <input placeholder="Subject" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
            <input placeholder="Due Date" value={form.dueDate} onChange={e => setForm(f => ({ ...f, dueDate: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
            <label style={{ display: 'block', marginBottom: 12 }}>
              <input type="checkbox" checked={form.completed} onChange={e => setForm(f => ({ ...f, completed: e.target.checked }))} /> Completed
            </label>
            <div style={{ display: 'flex', gap: 12 }}>
              <button type="submit" style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px' }}>{editActivity ? 'Update' : 'Create'}</button>
              <button type="button" style={{ background: '#eee', borderRadius: 8, padding: '8px 20px' }} onClick={() => { setModalOpen(false); setEditActivity(null); }}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      </main>
    </div>
  );
}
