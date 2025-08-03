import type { NextApiRequest, NextApiResponse } from 'next';

let activities = [
  { id: 1, type: 'Call', subject: 'Intro Call', status: 'Scheduled' },
  { id: 2, type: 'Email', subject: 'Follow Up', status: 'Completed' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(activities);
  } else if (req.method === 'POST') {
    const { type, subject, status } = req.body;
    const newActivity = { id: Date.now(), type, subject, status };
    activities.push(newActivity);
    res.status(201).json(newActivity);
  } else if (req.method === 'PUT') {
    const { id, type, subject, status } = req.body;
    activities = activities.map(a => a.id === id ? { ...a, type, subject, status } : a);
    res.status(200).json({ id, type, subject, status });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    activities = activities.filter(a => a.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
