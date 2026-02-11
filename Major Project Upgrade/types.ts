
export interface Flavor {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'meal';
  image: string;
  hasFlavors?: boolean;
  gradient?: string;
}

export interface CartItem {
  id: string; // Unique key for cart row (e.g. productId + flavorName)
  productId: string;
  name: string;
  flavor?: string;
  price: number;
  quantity: number;
}
