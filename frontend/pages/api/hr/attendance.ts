import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../_prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const attendance = await prisma.attendance.findMany({ include: { employee: true } });
    res.json(attendance);
  } else if (req.method === 'POST') {
    const { employeeId, date, status, checkIn, checkOut, location, ip, approved } = req.body;
    const record = await prisma.attendance.create({
      data: { employeeId, date: new Date(date), status, checkIn, checkOut, location, ip, approved },
    });
    res.status(201).json(record);
  } else if (req.method === 'PUT') {
    const { id, ...data } = req.body;
    if (data.date) data.date = new Date(data.date);
    const record = await prisma.attendance.update({ where: { id }, data });
    res.json(record);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await prisma.attendance.delete({ where: { id } });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
