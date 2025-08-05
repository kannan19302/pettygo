import Head from 'next/head';
import Sidebar from '../../components/ecommerce/Sidebar';
export default function EcommerceReports() {
  return (
    <>
      <Head><title>Reports | Ecommerce</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/ecommerce/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Ecommerce Reports</h1>
          <p>Ecommerce reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
