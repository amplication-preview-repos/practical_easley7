import { RoomType as TRoomType } from "../api/roomType/RoomType";

export const ROOMTYPE_TITLE_FIELD = "id";

export const RoomTypeTitle = (record: TRoomType): string => {
  return record.id?.toString() || String(record.id);
};
