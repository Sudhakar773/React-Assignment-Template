export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  createdAt: string;   // ISO string
  isActive: boolean;
  tags: string[];
}
