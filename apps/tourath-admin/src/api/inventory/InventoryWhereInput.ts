import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryWhereInput = {
  id?: StringFilter;
  stock?: IntNullableFilter;
  warehouseLocation?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
};
