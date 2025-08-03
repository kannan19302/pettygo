import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/products').then(r => r.json()).then(setProducts);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Products</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Code</th><th>Description</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.code}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
