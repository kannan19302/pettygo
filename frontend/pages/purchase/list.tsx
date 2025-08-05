import Head from 'next/head';
import Sidebar from '../../components/purchase/Sidebar';
export default function PurchaseList() {
  return (
    <>
      <Head><title>Purchases | Purchase</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/purchase/list" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Purchases</h1>
          <p>Purchase management coming soon.</p>
        </main>
      </div>
    </>
  );
}
