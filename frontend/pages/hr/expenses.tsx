
import React, { useEffect, useState } from 'react';

type Expense = {
  id: number;
  employeeId: number;
  type: string;
  amount: number;
  description?: string;
  status: string;
  submittedAt: string;
};

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [employeeId, setEmployeeId] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchExpenses = async () => {
    setLoading(true);
    const res = await fetch('/api/hr/expenses');
    if (res.ok) {
      setExpenses(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/hr/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        employeeId: Number(employeeId),
        type,
        amount: Number(amount),
        description,
      }),
    });
    if (res.ok) {
      setEmployeeId('');
      setType('');
      setAmount('');
      setDescription('');
      fetchExpenses();
    }
  };

  return (
    <div>
      <h1>Expenses</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label>
          Employee ID:
          <input value={employeeId} onChange={e => setEmployeeId(e.target.value)} required type="number" />
        </label>
        <label style={{ marginLeft: 12 }}>
          Type:
          <input value={type} onChange={e => setType(e.target.value)} required />
        </label>
        <label style={{ marginLeft: 12 }}>
          Amount:
          <input value={amount} onChange={e => setAmount(e.target.value)} required type="number" />
        </label>
        <label style={{ marginLeft: 12 }}>
          Description:
          <input value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <button type="submit" style={{ marginLeft: 12 }}>Add Expense</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <table border={1} cellPadding={6} style={{ width: '100%', maxWidth: 900 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Status</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.employeeId}</td>
                <td>{e.type}</td>
                <td>{e.amount}</td>
                <td>{e.description}</td>
                <td>{e.status}</td>
                <td>{e.submittedAt?.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
