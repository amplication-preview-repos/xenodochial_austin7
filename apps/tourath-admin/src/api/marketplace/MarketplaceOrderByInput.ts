import { SortOrder } from "../../util/SortOrder";

export type MarketplaceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  productName?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  category?: SortOrder;
  discount?: SortOrder;
};
