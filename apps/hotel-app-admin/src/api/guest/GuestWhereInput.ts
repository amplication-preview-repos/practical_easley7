import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type GuestWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  reservation?: ReservationWhereUniqueInput;
};
