import Head from 'next/head';
import Sidebar from '../../components/ecommerce/Sidebar';
export default function EcommerceOrders() {
  return (
    <>
      <Head><title>Orders | Ecommerce</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/ecommerce/orders" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Ecommerce Orders</h1>
          <p>Order management coming soon.</p>
        </main>
      </div>
    </>
  );
}
