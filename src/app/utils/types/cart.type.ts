export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export type Cart = CartItem[];
