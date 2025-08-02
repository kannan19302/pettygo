
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from './_prisma';

let adminRequests: { username: string; requestedAt: string }[] = [];


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Login
    const { username, password } = req.body;
    try {
      const user = await prisma.user.findUnique({ where: { username } });
      if (user && user.password === password) {
        res.status(200).json({ success: true, role: user.role });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (e) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else if (req.method === 'PUT') {
    // Register
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }
    try {
      const exists = await prisma.user.findUnique({ where: { username } });
      if (exists) {
        return res.status(409).json({ success: false, message: 'Username already exists' });
      }
      await prisma.user.create({ data: { username, password, role } });
      res.status(201).json({ success: true });
    } catch (e) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else if (req.method === 'PATCH') {
    // Request admin access (demo, not persisted)
    const { username } = req.body;
    if (!adminRequests.find(r => r.username === username)) {
      adminRequests.push({ username, requestedAt: new Date().toISOString() });
    }
    res.status(200).json({ success: true });
  } else if (req.method === 'GET') {
    // Only superadmin can view requests
    const { role } = req.query;
    if (role === 'superadmin') {
      res.status(200).json({ requests: adminRequests });
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  } else {
    res.status(405).end();
  }
}
