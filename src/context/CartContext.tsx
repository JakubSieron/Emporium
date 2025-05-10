import { CartItem } from '../types/CartItem';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  decrementFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

 const addToCart = (item: Omit<CartItem, 'quantity'>) => {
  setCartItems((prev) => {
    const existing = prev.find((p) => p.id === item.id);
    if (existing) {
      return prev.map((p) =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    }
    return [...prev, { ...item, quantity: 1 }];
  });
};


  const decrementFromCart = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decrementFromCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
