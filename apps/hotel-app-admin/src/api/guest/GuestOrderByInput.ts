import { SortOrder } from "../../util/SortOrder";

export type GuestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  phoneNumber?: SortOrder;
  reservationId?: SortOrder;
};
