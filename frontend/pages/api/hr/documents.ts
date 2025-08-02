import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const documents = await prisma.document.findMany({ include: { employee: true } });
    res.json(documents);
  } else if (req.method === 'POST') {
    const { employeeId, type, name, status } = req.body;
    const document = await prisma.document.create({
      data: { employeeId, type, name, status },
    });
    res.status(201).json(document);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    const document = await prisma.document.update({ where: { id }, data });
    res.json(document);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.document.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
