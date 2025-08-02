import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const payrolls = await prisma.payroll.findMany({ include: { employee: true } });
    res.json(payrolls);
  } else if (req.method === 'POST') {
    const { employeeId, period, amount, status } = req.body;
    const payroll = await prisma.payroll.create({
      data: { employeeId, period, amount, status },
    });
    res.status(201).json(payroll);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    const payroll = await prisma.payroll.update({ where: { id }, data });
    res.json(payroll);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.payroll.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
