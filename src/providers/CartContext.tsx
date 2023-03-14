import React, { useState } from "react";
import { createContext } from "react";
import { IProducts } from "./productsContext";

interface ICartContext {
  cart: IProducts[];
  addToCart: (product: IProducts) => void;
  totalValue: () => number;
  removeProduct: (name: string) => void;
}

interface ICartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<IProducts[]>([]);

  const totalValue = (): number => {
    const sum = cart.reduce((prevValue: number, currentValue: IProducts) => {
      return prevValue + Number(currentValue.price);
    }, 0);
    return sum;
  };

  const addToCart = (product: IProducts) => {
    if (!cart.find((producter) => producter.name === product.name)) {
      setCart([...cart, product]);
    }
  };

  const removeProduct = (name: string) => {
    setCart(cart.filter((product) => product.name !== name));
  };

  return (
    <CartContext.Provider
      value={{ cart, totalValue, addToCart, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
