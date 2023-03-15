import React, { useState } from "react";
import { createContext } from "react";
import { IProducts } from "./productsContext";

interface ICartContext {
  cart: IProducts[];
  setCart: React.Dispatch<React.SetStateAction<IProducts[]>>;
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
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const removeProduct = (id: any) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
