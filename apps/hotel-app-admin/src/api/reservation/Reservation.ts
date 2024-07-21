import { Guest } from "../guest/Guest";

export type Reservation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  guestId: string | null;
  hotelId: string | null;
  roomId: string | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  numberOfGuests: string | null;
  reservationStatus?: "Option1" | null;
  totalPrice: number | null;
  paymentStatus?: "Option1" | null;
  bookingDate: Date | null;
  specialRequests: string | null;
  confirmationNumber: string | null;
  cancellationDate: Date | null;
  cancellationReason: string | null;
  roomTypeId: string | null;
  additionalServices: string | null;
  isPaid: boolean | null;
  lastModified: string | null;
  guests?: Array<Guest>;
};
