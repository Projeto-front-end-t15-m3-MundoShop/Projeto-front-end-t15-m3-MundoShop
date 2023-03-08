import { createContext, useState } from "react";
import { api } from "../Services/api";

interface IDefaultProviderProps {
    children: React.ReactNode;
}

interface IProducts {
    img: string;
    name: string;
    price: number;
    description: string;
}


interface IProductsContext {

}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {

    const ListProduct = async () => {
        try {
        const response = await api.get(`/products`)
        console.log(response)     
        } catch (error) {
            
        }
    }

    return (
        <ProductsContext.Provider value={{}}>
            {children}
        </ProductsContext.Provider>
    );
};