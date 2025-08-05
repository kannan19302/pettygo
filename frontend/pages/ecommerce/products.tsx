import Head from 'next/head';
import Sidebar from '../../components/ecommerce/Sidebar';
export default function EcommerceProducts() {
  return (
    <>
      <Head><title>Products | Ecommerce</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/ecommerce/products" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Ecommerce Products</h1>
          <p>Product management coming soon.</p>
        </main>
      </div>
    </>
  );
}
