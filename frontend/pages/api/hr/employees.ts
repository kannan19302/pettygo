import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } else if (req.method === 'POST') {
    const { name, position, email, phone, department, status, joinDate } = req.body;
    const employee = await prisma.employee.create({
      data: { name, position, email, phone, department, status, joinDate: joinDate ? new Date(joinDate) : new Date() },
    });
    res.status(201).json(employee);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    const employee = await prisma.employee.update({ where: { id }, data });
    res.json(employee);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.employee.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
