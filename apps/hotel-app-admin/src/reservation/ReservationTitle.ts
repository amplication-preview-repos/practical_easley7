import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "guestId";

export const ReservationTitle = (record: TReservation): string => {
  return record.guestId?.toString() || String(record.id);
};
