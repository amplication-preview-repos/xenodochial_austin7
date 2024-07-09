export type Marketplace = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  productName: string | null;
  description: string | null;
  price: number | null;
  stock: number | null;
  category: string | null;
  discount: number | null;
};
