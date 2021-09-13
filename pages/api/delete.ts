import { NextApiRequest, NextApiResponse } from 'next';
import { unlinkSync, existsSync } from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    if (req.method === 'POST') {
        try {
            const { name }: { name?: string } = req.body;
            if (name) {
                const dir: string = `./root/${name}`;
                if (existsSync(dir)) {
                    unlinkSync(dir);
                    res.status(200).json({ status: 0 })
                }
                else {
                    res.status(200).json({ status: -1, err: '文件不存在!' })
                }
            }
            else {
                res.status(200).json({ status: -1, err: '字段name不能为空!' });
            }
        } catch (error) {
            res.status(200).json({ status: -1, err: String(error) })
        }
    }
    else {
        res.status(405).send('<html><h2>method not allowed.</h2></html>');
    }
}
