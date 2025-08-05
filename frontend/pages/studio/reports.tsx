import Head from 'next/head';
import Sidebar from '../../components/studio/Sidebar';
export default function StudioReports() {
  return (
    <>
      <Head><title>Reports | Studio</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/studio/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Studio Reports</h1>
          <p>Studio reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
