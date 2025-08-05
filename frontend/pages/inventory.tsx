
import Head from 'next/head';
import Sidebar from '../components/inventory/Sidebar';
export default function InventoryDashboard() {
  return (
    <>
      <Head><title>Inventory | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/inventory" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Inventory Dashboard</h1>
          <p>Welcome to the inventory module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
