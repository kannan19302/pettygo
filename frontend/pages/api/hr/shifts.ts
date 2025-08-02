import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const shifts = await prisma.shift.findMany({ include: { employee: true } });
    res.json(shifts);
  } else if (req.method === 'POST') {
    const { employeeId, name, start, end } = req.body;
    const shift = await prisma.shift.create({
      data: { employeeId, name, start, end },
    });
    res.status(201).json(shift);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    const shift = await prisma.shift.update({ where: { id }, data });
    res.json(shift);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.shift.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
