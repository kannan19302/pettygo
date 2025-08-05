import Head from 'next/head';
import Sidebar from '../../components/pos/Sidebar';
export default function POSReports() {
  return (
    <>
      <Head><title>Reports | POS</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/pos/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>POS Reports</h1>
          <p>POS reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
