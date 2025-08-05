
import Head from 'next/head';
import Sidebar from '../components/hr/Sidebar';
export default function HRDashboard() {
  return (
    <>
      <Head><title>HR | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/hr" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>HR Dashboard</h1>
          <p>Welcome to the HR module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
