
import Head from 'next/head';
import Sidebar from '../components/projects/Sidebar';
export default function ProjectsDashboard() {
  return (
    <>
      <Head><title>Projects | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/projects" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Projects Dashboard</h1>
          <p>Welcome to the projects module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
