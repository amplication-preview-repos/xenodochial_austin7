import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  totalPrice?: number | null;
  status?: "Option1" | null;
  experience?: string | null;
  user?: UserWhereUniqueInput | null;
};
