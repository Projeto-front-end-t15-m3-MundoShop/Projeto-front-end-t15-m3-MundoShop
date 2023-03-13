import { AxiosResponse } from "axios"
import { createContext, useEffect, useState } from "react"
import { api } from "../Services/api"

interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface IProducts {
  description: string
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
  createSale: (FormData: ICreateSaleFormValues) => void
  setCreateSaleModal: React.Dispatch<React.SetStateAction<boolean>>
  createSaleModal: boolean
}

export const ProductsContext = createContext({} as IProductsContext)

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const [list, setList] = useState([] as IProducts[])
  const [createSaleModal, setCreateSaleModal] = useState<boolean>(false)

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

  async function createSale(FormData: ICreateSaleFormValues) {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.post("/products", FormData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      // toast.success
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductsContext.Provider
      value={{ list, setList, createSale, createSaleModal, setCreateSaleModal }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
function toast(response: AxiosResponse<any, any>) {
  throw new Error("Function not implemented.")
}
