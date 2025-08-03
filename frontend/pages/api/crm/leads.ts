import type { NextApiRequest, NextApiResponse } from 'next';

let leads = [
  { id: 1, firstName: 'John', lastName: 'Doe', status: 'New' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', status: 'Contacted' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(leads);
  } else if (req.method === 'POST') {
    const { firstName, lastName, status } = req.body;
    const newLead = { id: Date.now(), firstName, lastName, status };
    leads.push(newLead);
    res.status(201).json(newLead);
  } else if (req.method === 'PUT') {
    const { id, firstName, lastName, status } = req.body;
    leads = leads.map(l => l.id === id ? { ...l, firstName, lastName, status } : l);
    res.status(200).json({ id, firstName, lastName, status });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    leads = leads.filter(l => l.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
