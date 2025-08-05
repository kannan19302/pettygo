import Head from 'next/head';
import Sidebar from '../components/ecommerce/Sidebar';
export default function EcommerceDashboard() {
  return (
    <>
      <Head><title>Ecommerce | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/ecommerce" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Ecommerce Dashboard</h1>
          <p>Welcome to the ecommerce module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
