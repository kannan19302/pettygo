import Head from 'next/head';
import Sidebar from '../../components/analytics/Sidebar';
export default function AnalyticsReports() {
  return (
    <>
      <Head><title>Reports | Analytics</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/analytics/reports" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Analytics Reports</h1>
          <p>Analytics reporting coming soon.</p>
        </main>
      </div>
    </>
  );
}
