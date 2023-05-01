import type { VercelRequest, VercelResponse } from '@vercel/node';
import { RoomListAndReservationInfo } from '../../models/RoomListAndReservationInfo';

const data = <RoomListAndReservationInfo>{
    List: [
        {
            Date: 20230101,
            ReservationList: [
                {
                    id: 0,
                    name: '测试房间',
                    reservations: [
                        {
                            reservater: '测试人员',
                            reservationTimeStart: 14*60+40,
                            reservationTimeEnd: 16*60+45,
                            purposes: '测试用途',
                        },
                    ],
                },
            ],
        }
    ],
}

export default async (req: VercelRequest, res: VercelResponse) => {
    res.status(200).json(data);
}