import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EnkiduWhereInput = {
  id?: StringFilter;
  eventName?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  description?: StringNullableFilter;
  capacity?: IntNullableFilter;
  host?: StringNullableFilter;
};
