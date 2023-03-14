import React, { useState } from "react";
import { createContext } from "react";
import { IProducts } from "./productsContext";

interface ICartContext {
  cart: IProducts[];
  addToCart: (product: IProducts) => void;
  removeProduct: (id: any) => void;
}

interface ICartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<IProducts[]>([]);

  const addToCart = (product: IProducts) => {
    if (!cart.find((producter) => producter.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeProduct = (id: any) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
