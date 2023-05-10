import type { VercelRequest, VercelResponse } from '@vercel/node';
import mongodbClient from '../../repository/mongodb';

export default async (req: VercelRequest, res: VercelResponse) => {
    try {
        await new mongodbClient().admin_deleteRoom(req.query["roomId"] as string);
    } catch (error) {
        res.status(500).json({ "deleteRoom": req.query["roomId"] as string, "scuccess": false, "error": error });
    } finally {
        res.status(200).json({ "deleteRoom": req.query["roomId"] as string, "scuccess": true });
    }
}