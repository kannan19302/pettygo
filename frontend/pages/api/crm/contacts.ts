import type { NextApiRequest, NextApiResponse } from 'next';

let contacts = [
  { id: 1, firstName: 'Alice', lastName: 'Brown', email: 'alice@example.com' },
  { id: 2, firstName: 'Bob', lastName: 'Green', email: 'bob@example.com' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(contacts);
  } else if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body;
    const newContact = { id: Date.now(), firstName, lastName, email };
    contacts.push(newContact);
    res.status(201).json(newContact);
  } else if (req.method === 'PUT') {
    const { id, firstName, lastName, email } = req.body;
    contacts = contacts.map(c => c.id === id ? { ...c, firstName, lastName, email } : c);
    res.status(200).json({ id, firstName, lastName, email });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    contacts = contacts.filter(c => c.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
