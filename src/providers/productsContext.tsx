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
    filteredProducts: string
    setFilteredProducts: React.Dispatch<React.SetStateAction<string>>
    searchProducts: IProducts[]
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {

    const [filteredProducts, setFilteredProducts] = useState("")
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

    const searchProducts = list.filter((product) => {
        return filteredProducts === "" ? true : (product.name.toLowerCase()).includes(filteredProducts.toLowerCase())
    })

    return (
        <ProductsContext.Provider value={{ list, setList, filteredProducts, setFilteredProducts, searchProducts}}>
            {children}
        </ProductsContext.Provider>
    );
};