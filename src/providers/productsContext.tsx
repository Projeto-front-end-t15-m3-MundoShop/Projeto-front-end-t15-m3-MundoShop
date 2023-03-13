import { AxiosResponse } from "axios"
import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { api } from "../Services/api"

interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface IProducts {
  description: string
  category?: string
  img: string
  name: string
  price: number
  userId: number
}

export interface ICreateSaleFormValues {
  name: string
  category: string
  description: string
  img: string
  price: number
}

interface IProductsContext {
  list: IProducts[]
  setList: React.Dispatch<React.SetStateAction<IProducts[]>>
  filteredProducts: string
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>
  searchProducts: IProducts[]
  createSale: (FormData: ICreateSaleFormValues) => void
  setCreateSaleModal: React.Dispatch<React.SetStateAction<boolean>>
  createSaleModal: boolean
}

export const ProductsContext = createContext({} as IProductsContext)

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const [list, setList] = useState([] as IProducts[])
  const [createSaleModal, setCreateSaleModal] = useState<boolean>(false)
  const [filteredProducts, setFilteredProducts] = useState("")

  // commit de novo

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
    return filteredProducts === ""
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase())
  })

  async function createSale(FormData: ICreateSaleFormValues) {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.post("/products", FormData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      toast.success("Venda criada com sucesso")
      setCreateSaleModal(!createSaleModal)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        list,
        setList,
        createSale,
        createSaleModal,
        setCreateSaleModal,
        filteredProducts,
        setFilteredProducts,
        searchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
