import { readdirSync } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const files = readdirSync('./root');
    res.status(200).json({ status: 0, files })
}
