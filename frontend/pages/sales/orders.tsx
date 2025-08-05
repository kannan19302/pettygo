import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Sidebar from '../../components/sales/Sidebar';
import type { Order } from '../../../apps/sales/entities/order.entity';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    fetch('/api/sales/orders').then(r => r.json()).then(setOrders);
  }, []);
  return (
    <>
      <Head><title>Orders | Sales</title></Head>
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--erp-bg, #f8fafc)' }}>
        <Sidebar active="/sales/orders" />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1>Orders</h1>
          <table className="erp-table">
            <thead>
              <tr><th>ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.amount}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
      <style jsx>{`
        .erp-table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        .erp-table th, .erp-table td { border: 1px solid #e5e7eb; padding: 0.7rem; }
        .erp-table th { background: #f8fafc; }
      `}</style>
    </>
  );
}
