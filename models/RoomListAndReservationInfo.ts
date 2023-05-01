export interface RoomListAndReservationInfo {
    List: Date[];
}

interface Date {
    Date: number;
    ReservationList: Room[];
}

interface Room {
    id: number;
    name: string;
    reservations: ReservationInfo[];
}

interface ReservationInfo {
    reservater: string;
    /**
     * 预约时间，从零点开始计算，单位:分
     */
    reservationTimeStart: number;
    reservationTimeEnd: number;
    purposes: string;
}