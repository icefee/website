import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, File } from 'formidable';
import { createReadStream, createWriteStream } from 'fs';

export const config = {
    api: {
        bodyParser: false
    }
}

/*
export interface File {
    size: number;
    filepath: string;
    originalFilename: string | null;
    newFilename: string | null;
    mimetype: string | null;
    mtime: Date | null;
    hashAlgorithm: false | 'sha1' | 'md5' | 'sha256'
    hash: string | object | null;
}
*/

interface Fields {
    name: string
}

interface Files<T> {
    file: T
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { method } = req;
    if (method === 'POST') {
        const data = await new Promise<{ fields: Fields, files: Files<File> }>((resolve, reject) => {
            new IncomingForm().parse(
                req, (err: string, fields: Fields, files: Files<File>) => {
                    if (err) {
                        reject(err);
                    }
                    resolve({ fields, files })
                }
            )
        });
        const { name }: { name: string } = data.fields;
        const { file }: { file: File } = data.files;
        // const buffer = await file.buffer;
        let steam = createReadStream(file.path);
        let destination = createWriteStream(`./root/${name}`);
        steam.pipe(destination, {
            end: true
        });
        res.status(200).json({ status: 0 });
    }
    else {
        res.status(405).send('<html><h2>method not allowed.</h2></html>');
    }
}
