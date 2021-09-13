import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
interface CASE {
    category: number;
    id: number;
    title: string;
    cover: string;
}
export declare const cases: CASE[];
export default function handler(req: NextApiRequest, res: NextApiResponse) : NextApiHandler;
