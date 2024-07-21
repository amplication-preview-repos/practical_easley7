import { Guest as TGuest } from "../api/guest/Guest";

export const GUEST_TITLE_FIELD = "lastName";

export const GuestTitle = (record: TGuest): string => {
  return record.lastName?.toString() || String(record.id);
};
