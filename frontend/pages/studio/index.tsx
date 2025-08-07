
import Head from 'next/head';
import Sidebar from '../../components/studio/Sidebar';
import dynamic from 'next/dynamic';

const StudioDashboard = dynamic(() => import('../../components/studio/StudioDashboard'), { ssr: false });

export default function Studio() {
  return (
    <>
      <Head><title>Dashboard | Studio</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/studio" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <StudioDashboard />
        </main>
      </div>
    </>
  );
}
