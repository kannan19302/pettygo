import Head from 'next/head';
import Sidebar from '../../components/manufacturing/Sidebar';
export default function ManufacturingJobs() {
  return (
    <>
      <Head><title>Jobs | Manufacturing</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/manufacturing/jobs" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Manufacturing Jobs</h1>
          <p>Job management coming soon.</p>
        </main>
      </div>
    </>
  );
}
