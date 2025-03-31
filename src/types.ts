// Navigation Types
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  ProductList: { categoryId?: string; title: string };
  ProductDetail: { productId: string };
  Search: undefined;
  Checkout: undefined;
  OrderConfirmation: { orderId: string };
};

export type MainTabParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
  Profile: undefined;
};

// Data Types
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountPrice?: number;
  description: string;
  colors: string[];
  sizes: string[];
  images: string[];
  rating: number;
  inStock: boolean;
  isFavorite?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  brand: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  trackingNumber?: string;
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
}

export interface Address {
  id: string;
  name: string;
  address: string;
  city: string;
  state?: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'applepay';
  lastFour?: string;
  brand?: string;
  expiryDate?: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  addresses: Address[];
  paymentMethods: PaymentMethod[];
}