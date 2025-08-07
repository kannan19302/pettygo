import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const workflows = await prisma.studioWorkflow.findMany({ include: { steps: true } });
    res.status(200).json(workflows);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
