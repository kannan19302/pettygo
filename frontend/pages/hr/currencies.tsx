
import React, { useEffect, useState } from 'react';

type Currency = {
  id: number;
  code: string;
  name: string;
  symbol: string;
};

export default function CurrenciesPage() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCurrencies = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/currencies');
    if (res.ok) {
      setCurrencies(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/currencies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code,
        name,
        symbol,
      }),
    });
    if (res.ok) {
      setCode('');
      setName('');
      setSymbol('');
      fetchCurrencies();
    }
  };

  return (
    <div>
      <h1>Currencies</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Code:
          <input value={code} onChange={e => setCode(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Name:
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Symbol:
          <input value={symbol} onChange={e => setSymbol(e.target.value)} required />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Currency</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Name</th>
              <th>Symbol</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.code}</td>
                <td>{c.name}</td>
                <td>{c.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
