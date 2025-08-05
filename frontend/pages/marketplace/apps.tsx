import Head from 'next/head';
import Sidebar from '../../components/marketplace/Sidebar';
export default function MarketplaceApps() {
  return (
    <>
      <Head><title>Apps | Marketplace</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/marketplace/apps" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Marketplace Apps</h1>
          <p>App management coming soon.</p>
        </main>
      </div>
    </>
  );
}
