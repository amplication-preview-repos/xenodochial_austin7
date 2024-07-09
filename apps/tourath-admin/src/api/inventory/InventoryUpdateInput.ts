import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  stock?: number | null;
  warehouseLocation?: string | null;
  product?: ProductWhereUniqueInput | null;
};
