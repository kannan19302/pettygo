import type { NextApiRequest, NextApiResponse } from 'next';

let deals = [
  { id: 1, name: 'Big Sale', stage: 'Prospecting', amount: 10000 },
  { id: 2, name: 'Renewal', stage: 'Negotiation', amount: 5000 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(deals);
  } else if (req.method === 'POST') {
    const { name, stage, amount } = req.body;
    const newDeal = { id: Date.now(), name, stage, amount: parseFloat(amount) };
    deals.push(newDeal);
    res.status(201).json(newDeal);
  } else if (req.method === 'PUT') {
    const { id, name, stage, amount } = req.body;
    deals = deals.map(d => d.id === id ? { ...d, name, stage, amount: parseFloat(amount) } : d);
    res.status(200).json({ id, name, stage, amount: parseFloat(amount) });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    deals = deals.filter(d => d.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
