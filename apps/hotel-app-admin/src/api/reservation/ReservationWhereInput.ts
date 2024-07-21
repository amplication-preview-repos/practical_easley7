import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { GuestListRelationFilter } from "../guest/GuestListRelationFilter";

export type ReservationWhereInput = {
  id?: StringFilter;
  guestId?: StringNullableFilter;
  hotelId?: StringNullableFilter;
  roomId?: StringNullableFilter;
  checkInDate?: DateTimeNullableFilter;
  checkOutDate?: DateTimeNullableFilter;
  numberOfGuests?: StringNullableFilter;
  reservationStatus?: "Option1";
  totalPrice?: FloatNullableFilter;
  paymentStatus?: "Option1";
  bookingDate?: DateTimeNullableFilter;
  specialRequests?: StringNullableFilter;
  confirmationNumber?: StringNullableFilter;
  cancellationDate?: DateTimeNullableFilter;
  cancellationReason?: StringNullableFilter;
  roomTypeId?: StringNullableFilter;
  additionalServices?: StringNullableFilter;
  isPaid?: BooleanNullableFilter;
  lastModified?: StringNullableFilter;
  guests?: GuestListRelationFilter;
};
