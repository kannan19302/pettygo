import Head from 'next/head';
import Sidebar from '../../components/manufacturing/Sidebar';
export default function ManufacturingReports() {
  return (
    <>
      <Head><title>Reports | Manufacturing</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/manufacturing/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Manufacturing Reports</h1>
          <p>Manufacturing reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
