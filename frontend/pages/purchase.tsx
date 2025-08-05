
import Head from 'next/head';
import Sidebar from '../components/purchase/Sidebar';
export default function PurchaseDashboard() {
  return (
    <>
      <Head><title>Purchase | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/purchase" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Purchase Dashboard</h1>
          <p>Welcome to the purchase module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
