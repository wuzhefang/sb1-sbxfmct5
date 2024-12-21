export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  isHot?: boolean;
}

export interface ProductFormData {
  name: string;
  price: number;
  description: string;
  isHot?: boolean;
}