import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
    if (req.query.token === 'token'){
        res.setHeader('Set-Cookie', 'token=token');
        res.status(200).json({ logined: true ,setTokenInCookie: 'token' });
    }
}