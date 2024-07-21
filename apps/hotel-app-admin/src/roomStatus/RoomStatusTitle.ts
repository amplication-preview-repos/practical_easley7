import { RoomStatus as TRoomStatus } from "../api/roomStatus/RoomStatus";

export const ROOMSTATUS_TITLE_FIELD = "id";

export const RoomStatusTitle = (record: TRoomStatus): string => {
  return record.id?.toString() || String(record.id);
};
