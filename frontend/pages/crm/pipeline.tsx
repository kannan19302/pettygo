// Removed duplicate import

export default function PipelinePage() {
  const [stages, setStages] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editStage, setEditStage] = useState<any>(null);
  const [form, setForm] = useState({ name: '', order: '', description: '' });

  useEffect(() => {
    fetch('/crm/pipeline').then(r => r.json()).then(setStages);
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (editStage) {
      await fetch(`/crm/pipeline/${editStage.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/crm/pipeline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setModalOpen(false);
    setEditStage(null);
    setForm({ name: '', order: '', description: '' });
    fetch('/crm/pipeline').then(r => r.json()).then(setStages);
  };

  const handleDelete = async (id: any) => {
    if (window.confirm('Delete this stage?')) {
      await fetch(`/crm/pipeline/${id}`, { method: 'DELETE' });
      fetch('/crm/pipeline').then(r => r.json()).then(setStages);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <Sidebar active="/crm/pipeline" />
      <main style={{ flex: 1, padding: 32 }}>
        <h2 style={{ marginBottom: 24 }}>Pipeline</h2>
        <button style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px', marginBottom: 24 }} onClick={() => { setModalOpen(true); setEditStage(null); setForm({ name: '', order: '', description: '' }); }}>+ New Stage</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {stages.map(stage => (
            <div key={stage.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, position: 'relative' }}>
              <div style={{ fontWeight: 600, fontSize: 20 }}>{stage.name}</div>
              <div style={{ color: '#555', margin: '8px 0' }}>Order: {stage.order}</div>
              <div style={{ color: '#888', fontSize: 14 }}>Description: {stage.description}</div>
              <div style={{ position: 'absolute', top: 16, right: 16 }}>
                <button style={{ marginRight: 8 }} onClick={() => { setEditStage(stage); setForm({ name: stage.name, order: stage.order, description: stage.description }); setModalOpen(true); }}>Edit</button>
                <button style={{ color: 'red' }} onClick={() => handleDelete(stage.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <form style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} onSubmit={handleSave}>
              <h3 style={{ marginBottom: 16 }}>{editStage ? 'Edit Stage' : 'New Stage'}</h3>
              <input placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Order" value={form.order} onChange={e => setForm(f => ({ ...f, order: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <div style={{ display: 'flex', gap: 12 }}>
                <button type="submit" style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px' }}>{editStage ? 'Update' : 'Create'}</button>
                <button type="button" style={{ background: '#eee', borderRadius: 8, padding: '8px 20px' }} onClick={() => { setModalOpen(false); setEditStage(null); }}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
