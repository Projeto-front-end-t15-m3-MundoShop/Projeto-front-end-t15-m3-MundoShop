import { createContext, useEffect, useState } from "react";
import { api } from "../Services/api";

interface IDefaultProviderProps {
    children: React.ReactNode;
}

export interface IProducts {
    description: string
    img: string
    name: string
    price: number
    userId: number
}

interface IProductsContext {
    list: IProducts[]
    setList: React.Dispatch<React.SetStateAction<IProducts[]>>
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {

    const [list, setList] = useState([] as IProducts[])

    useEffect(() => {
        const ListProduct = async () => {
            try {
                const response = await api.get(`/products`)
                setList(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        ListProduct()
    })

    return (
        <ProductsContext.Provider value={{ list, setList }}>
            {children}
        </ProductsContext.Provider>
    );
};