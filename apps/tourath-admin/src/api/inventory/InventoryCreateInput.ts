import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  stock?: number | null;
  warehouseLocation?: string | null;
  product?: ProductWhereUniqueInput | null;
};
