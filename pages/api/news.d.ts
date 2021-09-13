import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

interface NewsItem {
    id: number;
    thumb: string;
    title: string;
    description: string;
    update: string;
}

export declare const news: NewsItem[];

declare const handler: (req: NextApiRequest, res: NextApiResponse) => NextApiHandler;
export default handler;