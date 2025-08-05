
import Head from 'next/head';
import Sidebar from '../components/pos/Sidebar';
export default function POSDashboard() {
  return (
    <>
      <Head><title>POS | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/pos" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>POS Dashboard</h1>
          <p>Welcome to the POS module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
