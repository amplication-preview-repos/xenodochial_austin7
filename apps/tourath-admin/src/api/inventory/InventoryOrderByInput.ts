import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  stock?: SortOrder;
  warehouseLocation?: SortOrder;
  productId?: SortOrder;
};
