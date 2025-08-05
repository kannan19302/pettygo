import Head from 'next/head';
import Sidebar from '../../components/purchase/Sidebar';
export default function PurchaseReports() {
  return (
    <>
      <Head><title>Reports | Purchase</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/purchase/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Purchase Reports</h1>
          <p>Purchase reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
