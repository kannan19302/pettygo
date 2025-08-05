
import Head from 'next/head';
import Sidebar from '../components/marketplace/Sidebar';
export default function MarketplaceDashboard() {
  return (
    <>
      <Head><title>Marketplace | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/marketplace" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Marketplace Dashboard</h1>
          <p>Welcome to the marketplace module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
