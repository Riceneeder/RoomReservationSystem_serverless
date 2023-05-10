import { MongoClient, ServerApiVersion } from "mongodb";

export default class mongodbClient {
    private MONGODB_URI = process.env["MONGODB_URI"] as string;
    private client = new MongoClient(this.MONGODB_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    /**
     * 增加新的会议室
     * @param newRoom new room name
     */
    async admin_setNewRoom(newRoom: string) {
        const rooms = await this.public_getRoomList();
        if (!rooms.includes(newRoom)) {
            try {
                await this.client.connect();
                await this.client.db("rooms").createCollection(newRoom);
            } catch (error) {
                throw error;
            } finally {
                await this.client.close();
            }
        }
    }

    /**
     * 删除会议室
     * @param roomId room id
     */
    async admin_deleteRoom(roomId: string) {
        const rooms = await this.public_getRoomList();
        if (rooms.includes(roomId)) {
            try {
                await this.client.connect();
                await this.client.db("rooms").collection(roomId).drop();
            } catch (error) {
                throw error;
            } finally {
                await this.client.close();
            }
        }
    }

    /**
     * 获取所有房间名称
     * @returns room list
     */
    async public_getRoomList() {
        try {
            await this.client.connect();
            const collections = await this.client.db("rooms").collections();
            let rooms: string[] = [];
            collections.forEach((doc) => {
                rooms.push(doc.collectionName);
            });
            return rooms;
        } finally {
            await this.client.close();
        }
    }

}