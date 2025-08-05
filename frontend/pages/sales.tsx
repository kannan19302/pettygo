import Head from 'next/head';
import Sidebar from '../components/sales/Sidebar';
export default function SalesDashboard() {
  return (
    <>
      <Head><title>Sales | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/sales" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Sales Dashboard</h1>
          <p>Welcome to the sales module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
