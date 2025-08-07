import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const automations = await prisma.studioAutomation.findMany();
    res.status(200).json(automations);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
