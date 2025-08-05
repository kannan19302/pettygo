import Head from 'next/head';
import Sidebar from '../../components/studio/Sidebar';
export default function StudioDesigns() {
  return (
    <>
      <Head><title>Designs | Studio</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/studio/designs" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Studio Designs</h1>
          <p>Design management coming soon.</p>
        </main>
      </div>
    </>
  );
}
