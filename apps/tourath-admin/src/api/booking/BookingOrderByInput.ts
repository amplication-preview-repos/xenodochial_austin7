import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  bookingDate?: SortOrder;
  totalPrice?: SortOrder;
  status?: SortOrder;
  experience?: SortOrder;
  userId?: SortOrder;
};
