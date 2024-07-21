import { RoomStatusWhereInput } from "./RoomStatusWhereInput";
import { RoomStatusOrderByInput } from "./RoomStatusOrderByInput";

export type RoomStatusFindManyArgs = {
  where?: RoomStatusWhereInput;
  orderBy?: Array<RoomStatusOrderByInput>;
  skip?: number;
  take?: number;
};
