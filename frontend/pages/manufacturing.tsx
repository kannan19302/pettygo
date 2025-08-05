
import Head from 'next/head';
import Sidebar from '../components/manufacturing/Sidebar';
export default function ManufacturingDashboard() {
  return (
    <>
      <Head><title>Manufacturing | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/manufacturing" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Manufacturing Dashboard</h1>
          <p>Welcome to the manufacturing module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
