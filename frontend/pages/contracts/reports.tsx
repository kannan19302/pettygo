import Head from 'next/head';
import Sidebar from '../../components/contracts/Sidebar';
export default function ContractsReports() {
  return (
    <>
      <Head><title>Reports | Contracts</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/contracts/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Contracts Reports</h1>
          <p>Contracts reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
