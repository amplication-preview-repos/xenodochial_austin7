import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type TourathNativeExperiencesWhereInput = {
  id?: StringFilter;
  experienceName?: StringNullableFilter;
  description?: StringNullableFilter;
  location?: StringNullableFilter;
  price?: FloatNullableFilter;
  duration?: IntNullableFilter;
  capacity?: IntNullableFilter;
  availability?: BooleanNullableFilter;
};
