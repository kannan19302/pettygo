import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const selfServices = await prisma.selfService.findMany({ include: { employee: true } });
    res.json(selfServices);
  } else if (req.method === 'POST') {
    const { employeeId, action, status } = req.body;
    const selfService = await prisma.selfService.create({
      data: { employeeId, action, status },
    });
    res.status(201).json(selfService);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    const selfService = await prisma.selfService.update({ where: { id }, data });
    res.json(selfService);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.selfService.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
