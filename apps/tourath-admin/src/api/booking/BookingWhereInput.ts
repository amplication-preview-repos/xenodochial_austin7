import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  bookingDate?: DateTimeNullableFilter;
  totalPrice?: FloatNullableFilter;
  status?: "Option1";
  experience?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
