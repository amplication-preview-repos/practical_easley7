import { RoomTypeWhereInput } from "./RoomTypeWhereInput";
import { RoomTypeOrderByInput } from "./RoomTypeOrderByInput";

export type RoomTypeFindManyArgs = {
  where?: RoomTypeWhereInput;
  orderBy?: Array<RoomTypeOrderByInput>;
  skip?: number;
  take?: number;
};
