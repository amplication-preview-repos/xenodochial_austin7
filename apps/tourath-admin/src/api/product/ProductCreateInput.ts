import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  quantity?: number | null;
  category?: string | null;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
};
