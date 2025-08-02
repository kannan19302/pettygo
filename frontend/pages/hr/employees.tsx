import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Sidebar from '../../components/hr/Sidebar';

const initialEmployees = [
  { id: 1, name: 'Alice Johnson', position: 'HR Manager', status: 'Active', email: 'alice@pettygo.com', phone: '555-1234', department: 'HR', joinDate: '2022-01-10' },
  { id: 2, name: 'Bob Smith', position: 'Recruiter', status: 'Active', email: 'bob@pettygo.com', phone: '555-5678', department: 'HR', joinDate: '2023-03-15' },
];

export default function Employees() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('hr-auth');
    const userRole = localStorage.getItem('hr-role');
    if (!isAuth) {
      router.replace('/hr/login');
    } else {
      setRole(userRole || '');
    }
  }, [router]);

  function addEmployee(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !position || !email || !phone || !department) return;
    setEmployees([
      ...employees,
      { id: Date.now(), name, position, status: 'Active', email, phone, department, joinDate: new Date().toISOString().slice(0, 10) }
    ]);
    setName(''); setPosition(''); setEmail(''); setPhone(''); setDepartment('');
  }

  function removeEmployee(id: number) {
    setEmployees(employees.filter(emp => emp.id !== id));
  }

  function openProfile(emp: any) {
    setSelected(emp);
    setShowProfile(true);
  }

  function closeProfile() {
    setShowProfile(false);
    setSelected(null);
  }

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.position.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head><title>Employees | HR</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr/employees" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Employee Management</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: '0.6rem 1rem', borderRadius: 8, border: '1.5px solid #e5e7eb', minWidth: 220 }}
            />
            {(role === 'admin' || role === 'superadmin') && (
              <form onSubmit={addEmployee} style={{ display: 'flex', gap: 8 }}>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
                <input value={position} onChange={e => setPosition(e.target.value)} placeholder="Position" required />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required />
                <input value={department} onChange={e => setDepartment(e.target.value)} placeholder="Department" required />
                <button type="submit">Add</button>
              </form>
            )}
          </div>
          <table className="erp-table">
            <thead>
              <tr>
                <th>Name</th><th>Position</th><th>Department</th><th>Status</th><th>Join Date</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} style={{ textAlign: 'center', color: '#888' }}>No employees found.</td></tr>
              ) : filtered.map(emp => (
                <tr key={emp.id}>
                  <td><button style={{ background: 'none', border: 'none', color: '#0070f3', cursor: 'pointer' }} onClick={() => openProfile(emp)}>{emp.name}</button></td>
                  <td>{emp.position}</td>
                  <td>{emp.department}</td>
                  <td>{emp.status}</td>
                  <td>{emp.joinDate}</td>
                  <td>
                    {(role === 'admin' || role === 'superadmin') && (
                      <button onClick={() => removeEmployee(emp.id)}>Remove</button>
                    )}
                    {role === 'user' && <span>View</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* AI Assistant for missing features */}
          <div style={{ marginTop: 32, background: '#f8fafc', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <b>AI Assistant:</b> Looking for advanced features like document upload, bulk import, or custom fields? <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => alert('This feature is not yet available. Would you like to create it now?')}>Let us know!</span>
          </div>
        </main>
        {/* Employee Profile Modal */}
        {showProfile && selected && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={closeProfile}>
            <div style={{ background: '#fff', borderRadius: 12, padding: '2rem', minWidth: 320, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} onClick={e => e.stopPropagation()}>
              <h2>{selected.name}</h2>
              <div><b>Position:</b> {selected.position}</div>
              <div><b>Email:</b> {selected.email}</div>
              <div><b>Phone:</b> {selected.phone}</div>
              <div><b>Department:</b> {selected.department}</div>
              <div><b>Status:</b> {selected.status}</div>
              <div><b>Join Date:</b> {selected.joinDate}</div>
              <button onClick={closeProfile} style={{ marginTop: 16 }}>Close</button>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .erp-table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        .erp-table th, .erp-table td { border: 1px solid #e5e7eb; padding: 0.7rem; }
        .erp-table th { background: #f8fafc; }
        form input { margin-right: 0.5rem; padding: 0.5rem; }
        form button { padding: 0.5rem 1.2rem; }
      `}</style>
    </>
  );
}
