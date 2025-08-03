import { useEffect, useState } from 'react';

export default function PriceBooksPage() {
  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/price-books').then(r => r.json()).then(setBooks);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Price Books</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
