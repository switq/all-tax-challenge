export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  product: string;
  sales: number[];
}
