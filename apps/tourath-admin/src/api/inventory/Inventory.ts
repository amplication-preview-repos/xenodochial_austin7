import { Product } from "../product/Product";

export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  stock: number | null;
  warehouseLocation: string | null;
  product?: Product | null;
};
