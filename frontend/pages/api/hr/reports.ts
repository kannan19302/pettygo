import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const reports = await prisma.report.findMany();
    res.json(reports);
  } else if (req.method === 'POST') {
    const { name, type, status } = req.body;
    const report = await prisma.report.create({
      data: { name, type, status },
    });
    res.status(201).json(report);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    const report = await prisma.report.update({ where: { id }, data });
    res.json(report);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.report.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
