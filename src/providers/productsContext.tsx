import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage"
import { createContext, useContext, useEffect, useState } from "react"
import { storage } from "../firebase"
import { toast } from "react-toastify"

import { api } from "../Services/api"
import { UserContext } from "./UserContext"

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
  createSaleModal: boolean;
  addProductImg: (event: any) => void
}

export const ProductsContext = createContext({} as IProductsContext)

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const [list, setList] = useState([] as IProducts[])
  const [createSaleModal, setCreateSaleModal] = useState<boolean>(false)
  const [filteredProducts, setFilteredProducts] = useState("")
  const {files} = useContext(UserContext)

  // commit

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
  }, [])
  
  const searchProducts = list.filter((product) => {
    return filteredProducts === "" ? true : (product.name.toLowerCase()).includes(filteredProducts.toLowerCase())
})

  const searchProducts = list.filter((product) => {
    return filteredProducts === ""
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase())
  })

  async function createSale(FormData: ICreateSaleFormValues) {
    const token = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem('@USERID')

    const newData = {...FormData, "userId": Number(userId)}

    try {
      const response = await api.post("/products", newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      toast.success("Venda criada com sucesso")
      setCreateSaleModal(!createSaleModal)
    } catch (error) {
      console.log(error)
    }
  }

  const addProductImg = (event: any) => {
    event.preventDefault()
    const userId = localStorage.getItem('@USERID')
    const token = localStorage.getItem('@TOKEN')
    files?.map(item => {
      const storageRef = ref(storage, `/ProductsFiles/${item.name}`)
      const uploadTask = uploadBytesResumable(storageRef, item)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (url) => {
            console.log(url)
          })
    })
    })
}

  return (
    <ProductsContext.Provider
      value={{ list, setList, createSale, createSaleModal, setCreateSaleModal, filteredProducts, setFilteredProducts, searchProducts, addProductImg}}
    >
      {children}
    </ProductsContext.Provider>
  )
}
