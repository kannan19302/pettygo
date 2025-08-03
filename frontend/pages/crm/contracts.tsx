// Removed duplicate import

export default function ContractsPage() {
  const [contracts, setContracts] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editContract, setEditContract] = useState<any>(null);
  const [form, setForm] = useState({ name: '', description: '', startDate: '', endDate: '' });

  useEffect(() => {
    fetch('/crm/contracts').then(r => r.json()).then(setContracts);
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (editContract) {
      await fetch(`/crm/contracts/${editContract.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/crm/contracts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setModalOpen(false);
    setEditContract(null);
    setForm({ name: '', description: '', startDate: '', endDate: '' });
    fetch('/crm/contracts').then(r => r.json()).then(setContracts);
  };

  const handleDelete = async (id: any) => {
    if (window.confirm('Delete this contract?')) {
      await fetch(`/crm/contracts/${id}`, { method: 'DELETE' });
      fetch('/crm/contracts').then(r => r.json()).then(setContracts);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f6f8' }}>
      <Sidebar active="/crm/contracts" />
      <main style={{ flex: 1, padding: 32 }}>
        <h2 style={{ marginBottom: 24 }}>Contracts</h2>
        <button style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px', marginBottom: 24 }} onClick={() => { setModalOpen(true); setEditContract(null); setForm({ name: '', description: '', startDate: '', endDate: '' }); }}>+ New Contract</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {contracts.map(contract => (
            <div key={contract.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, position: 'relative' }}>
              <div style={{ fontWeight: 600, fontSize: 20 }}>{contract.name}</div>
              <div style={{ color: '#555', margin: '8px 0' }}>{contract.description}</div>
              <div style={{ color: '#888', fontSize: 14 }}>Start: {contract.startDate}</div>
              <div style={{ color: '#888', fontSize: 14 }}>End: {contract.endDate}</div>
              <div style={{ position: 'absolute', top: 16, right: 16 }}>
                <button style={{ marginRight: 8 }} onClick={() => { setEditContract(contract); setForm({ name: contract.name, description: contract.description, startDate: contract.startDate, endDate: contract.endDate }); setModalOpen(true); }}>Edit</button>
                <button style={{ color: 'red' }} onClick={() => handleDelete(contract.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <form style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} onSubmit={handleSave}>
              <h3 style={{ marginBottom: 16 }}>{editContract ? 'Edit Contract' : 'New Contract'}</h3>
              <input placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="Start Date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <input placeholder="End Date" value={form.endDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} style={{ marginBottom: 12, width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
              <div style={{ display: 'flex', gap: 12 }}>
                <button type="submit" style={{ background: '#0070f3', color: '#fff', borderRadius: 8, padding: '8px 20px' }}>{editContract ? 'Update' : 'Create'}</button>
                <button type="button" style={{ background: '#eee', borderRadius: 8, padding: '8px 20px' }} onClick={() => { setModalOpen(false); setEditContract(null); }}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
