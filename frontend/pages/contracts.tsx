import Head from 'next/head';
import Sidebar from '../components/contracts/Sidebar';
export default function ContractsDashboard() {
  return (
    <>
      <Head><title>Contracts | PettyGo ERP</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/contracts" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Contracts Dashboard</h1>
          <p>Welcome to the contracts module. Use the sidebar to navigate features.</p>
        </main>
      </div>
    </>
  );
}
