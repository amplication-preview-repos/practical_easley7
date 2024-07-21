import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  guestId?: SortOrder;
  hotelId?: SortOrder;
  roomId?: SortOrder;
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  numberOfGuests?: SortOrder;
  reservationStatus?: SortOrder;
  totalPrice?: SortOrder;
  paymentStatus?: SortOrder;
  bookingDate?: SortOrder;
  specialRequests?: SortOrder;
  confirmationNumber?: SortOrder;
  cancellationDate?: SortOrder;
  cancellationReason?: SortOrder;
  roomTypeId?: SortOrder;
  additionalServices?: SortOrder;
  isPaid?: SortOrder;
  lastModified?: SortOrder;
};
