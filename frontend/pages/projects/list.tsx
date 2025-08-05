import Head from 'next/head';
import Sidebar from '../../components/projects/Sidebar';
export default function ProjectsList() {
  return (
    <>
      <Head><title>Projects List | Projects</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/projects/list" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Projects List</h1>
          <p>Project management coming soon.</p>
        </main>
      </div>
    </>
  );
}
