import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const leaves = await prisma.leave.findMany({ include: { employee: true } });
    res.json(leaves);
  } else if (req.method === 'POST') {
    const { employeeId, type, from, to, status, balance } = req.body;
    const leave = await prisma.leave.create({
      data: { employeeId, type, from: new Date(from), to: new Date(to), status, balance },
    });
    res.status(201).json(leave);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    if (data.from) data.from = new Date(data.from);
    if (data.to) data.to = new Date(data.to);
    const leave = await prisma.leave.update({ where: { id }, data });
    res.json(leave);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.leave.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
