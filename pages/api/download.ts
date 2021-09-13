import * as io from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) : void {
    const { name } = req.query;
    const dir: string = `./root/${name}`;
    if (io.existsSync(dir)) {
        const status = io.statSync(dir);
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename=${name}`);
        res.setHeader('Content-Length', status.size);
        io.createReadStream(dir).pipe(res);
    }
    else {
        res.status(200).json({ status: 1, err: '文件不存在' });
    }
}
