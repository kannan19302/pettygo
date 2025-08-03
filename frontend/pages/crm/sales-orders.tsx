import { useEffect, useState } from 'react';

export default function SalesOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/sales-orders').then(r => r.json()).then(setOrders);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Sales Orders</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Subject</th><th>Account</th><th>Total</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.subject}</td>
              <td>{order.accountId}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
