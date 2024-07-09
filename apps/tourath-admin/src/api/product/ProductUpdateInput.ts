import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  category?: string | null;
  inventories?: InventoryUpdateManyWithoutProductsInput;
};
