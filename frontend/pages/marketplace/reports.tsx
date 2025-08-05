import Head from 'next/head';
import Sidebar from '../../components/marketplace/Sidebar';
export default function MarketplaceReports() {
  return (
    <>
      <Head><title>Reports | Marketplace</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/marketplace/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Marketplace Reports</h1>
          <p>Marketplace reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
