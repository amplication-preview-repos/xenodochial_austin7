import { Inventory } from "../inventory/Inventory";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  quantity: number | null;
  category: string | null;
  inventories?: Array<Inventory>;
};
