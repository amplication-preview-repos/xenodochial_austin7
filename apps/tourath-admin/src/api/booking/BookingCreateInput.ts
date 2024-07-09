import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  totalPrice?: number | null;
  status?: "Option1" | null;
  experience?: string | null;
  user?: UserWhereUniqueInput | null;
};
