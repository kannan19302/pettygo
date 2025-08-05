import Head from 'next/head';
import Sidebar from '../../components/projects/Sidebar';
export default function ProjectsReports() {
  return (
    <>
      <Head><title>Reports | Projects</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/projects/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Projects Reports</h1>
          <p>Project reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
