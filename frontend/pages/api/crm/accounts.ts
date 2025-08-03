import type { NextApiRequest, NextApiResponse } from 'next';

let accounts = [
  { id: 1, name: 'Acme Corp', industry: 'Manufacturing' },
  { id: 2, name: 'Beta LLC', industry: 'Finance' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(accounts);
  } else if (req.method === 'POST') {
    const { name, industry } = req.body;
    const newAccount = { id: Date.now(), name, industry };
    accounts.push(newAccount);
    res.status(201).json(newAccount);
  } else if (req.method === 'PUT') {
    const { id, name, industry } = req.body;
    accounts = accounts.map(a => a.id === id ? { ...a, name, industry } : a);
    res.status(200).json({ id, name, industry });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    accounts = accounts.filter(a => a.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
