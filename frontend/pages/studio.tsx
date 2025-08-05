import Head from 'next/head';
import Sidebar from '../components/studio/Sidebar';
export default function StudioDashboard() {
  return (
    <>
      <Head><title>Studio | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/studio" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Studio Dashboard</h1>
          <p>Welcome to the studio module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
