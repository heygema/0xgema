// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

import {readdir} from 'fs/promises';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const files = await readdir('./src/data/_debug_posts');

  res.status(200).json({files});
}
