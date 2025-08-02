import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const performances = await prisma.performance.findMany({ include: { employee: true } });
    res.json(performances);
  } else if (req.method === 'POST') {
    const { employeeId, goal, score, period, feedback, status } = req.body;
    const performance = await prisma.performance.create({
      data: { employeeId, goal, score, period, feedback, status },
    });
    res.status(201).json(performance);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    const performance = await prisma.performance.update({ where: { id }, data });
    res.json(performance);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.performance.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
