import { Reservation } from "../reservation/Reservation";

export type Guest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastName: string | null;
  email: string | null;
  firstName: string | null;
  phoneNumber: string | null;
  reservation?: Reservation | null;
};
