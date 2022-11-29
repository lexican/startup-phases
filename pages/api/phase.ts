import type { NextApiRequest, NextApiResponse } from 'next';
import { data } from 'src/common/data/data';
import { IPhase } from 'src/common/types/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  // GET phases
  if (method === 'GET') {
    const phases: IPhase[] = data;

    res.status(200).json({ phases });
  }
}
