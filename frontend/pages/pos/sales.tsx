import Head from 'next/head';
import Sidebar from '../../components/pos/Sidebar';
export default function POSSales() {
  return (
    <>
      <Head><title>Sales | POS</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/pos/sales" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>POS Sales</h1>
          <p>POS sales management coming soon.</p>
        </main>
      </div>
    </>
  );
}
