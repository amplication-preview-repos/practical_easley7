import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type GuestCreateInput = {
  lastName?: string | null;
  email?: string | null;
  firstName?: string | null;
  phoneNumber?: string | null;
  reservation?: ReservationWhereUniqueInput | null;
};
