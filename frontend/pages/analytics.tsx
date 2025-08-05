
import Head from 'next/head';
import Sidebar from '../components/analytics/Sidebar';
export default function AnalyticsDashboard() {
  return (
    <>
      <Head><title>Analytics | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/analytics" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Analytics Dashboard</h1>
          <p>Welcome to the analytics module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
