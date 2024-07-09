import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MarketplaceWhereInput = {
  id?: StringFilter;
  productName?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  stock?: IntNullableFilter;
  category?: StringNullableFilter;
  discount?: FloatNullableFilter;
};
