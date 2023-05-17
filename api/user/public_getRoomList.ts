import type { VercelRequest, VercelResponse } from '@vercel/node';
import mongodbClient from '../../repository/mongodb';

export default async (req: VercelRequest, res: VercelResponse) => {
    new mongodbClient().public_getRoomList().then((data) => {
        res.status(200).json({ "RoomList": data});
    });
}