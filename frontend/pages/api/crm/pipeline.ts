import type { NextApiRequest, NextApiResponse } from 'next';

let pipeline = [
  { id: 1, name: 'Prospecting', order: 1 },
  { id: 2, name: 'Negotiation', order: 2 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(pipeline);
  } else if (req.method === 'POST') {
    const { name, order } = req.body;
    const newStage = { id: Date.now(), name, order: parseInt(order) };
    pipeline.push(newStage);
    res.status(201).json(newStage);
  } else if (req.method === 'PUT') {
    const { id, name, order } = req.body;
    pipeline = pipeline.map(p => p.id === id ? { ...p, name, order: parseInt(order) } : p);
    res.status(200).json({ id, name, order: parseInt(order) });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    pipeline = pipeline.filter(p => p.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
