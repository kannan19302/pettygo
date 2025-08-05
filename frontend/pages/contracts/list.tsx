import Head from 'next/head';
import Sidebar from '../../components/contracts/Sidebar';
export default function ContractsList() {
  return (
    <>
      <Head><title>Contracts | Contracts</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/contracts/list" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Contracts</h1>
          <p>Contract management coming soon.</p>
        </main>
      </div>
    </>
  );
}
