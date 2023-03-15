import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { storage } from "../firebase";
import { toast } from "react-toastify";
import { api } from "../Services/api";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IProducts {
  description: string;
  category?: string;
  img: string;
  name: string;
  price: string;
  userId: number;
  id?: number;
}

export interface ICreateSaleFormValues {
  name: string;
  category: string;
  description: string;
  img: string;
  price: number;
}

interface IProductsContext {
  list: IProducts[];
  setList: React.Dispatch<React.SetStateAction<IProducts[]>>;
  filteredProducts: string;
  setFilteredProducts: React.Dispatch<React.SetStateAction<string>>;
  searchProducts: IProducts[];
  createSale: (FormData: ICreateSaleFormValues) => void;
  setCreateSaleModal: React.Dispatch<React.SetStateAction<boolean>>;
  createSaleModal: boolean;
  addProductImg: (event: any) => void;
  setMySales: React.Dispatch<React.SetStateAction<IProducts[]>>;
  mySales: IProducts[];
  setProductFilesModal: React.Dispatch<React.SetStateAction<boolean>>;
  productFilesModal: boolean;
  addImgToProduct: (itemId: any) => void;
  removeMySale: () => Promise<void>;
  removeMySalesModal: boolean;
  setRemoveMySalesModal: React.Dispatch<React.SetStateAction<boolean>>;
  openMySalesModal: (itemId: any) => void;
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IDefaultProviderProps) => {
  const [list, setList] = useState([] as IProducts[])
  const [createSaleModal, setCreateSaleModal] = useState<boolean>(false)
  const [filteredProducts, setFilteredProducts] = useState("")
  const [mySales, setMySales] = useState([] as IProducts[])
  const [productFilesModal, setProductFilesModal] = useState(false)
  const [removeMySalesModal, setRemoveMySalesModal] = useState(false)
  const {files, setFiles} = useContext(UserContext)

  const navigate = useNavigate();

  useEffect(() => {
    const ListProduct = async () => {
      try {
        const response = await api.get(`/products`);
        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    ListProduct();
  }, []);

  const searchProducts = list.filter((product) => {
    return filteredProducts === ""
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase());
  });

  async function createSale(FormData: ICreateSaleFormValues) {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const newData = { ...FormData, userId: Number(userId) };

    try {
      const response = await api.post("/products", newData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Venda criada com sucesso");
      setCreateSaleModal(!createSaleModal);
      navigate("/mysales");
    } catch (error) {
      console.log(error);
    }
  }

  const addImgToProduct = (itemId: any) => {
    setProductFilesModal(!productFilesModal);
    localStorage.setItem("@PRODUCTID", itemId.toString());
  };

  const addProductImg = (event: any) => {
    event.preventDefault()
    const token = localStorage.getItem('@TOKEN')
    const productId = localStorage.getItem('@PRODUCTID')
    files?.map(item => {
      const storageRef = ref(storage, `/ProductsFiles/${item.name}`)
      const uploadTask = uploadBytesResumable(storageRef, item)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            try {
              const response = await api.patch(`/products/${productId}`, {img: url}, {headers: {'Authorization': `Bearer ${token}`}})
              setProductFilesModal(!productFilesModal)
              const mySalesUpdated = mySales.filter(item => item.id !== Number(productId))
              setMySales([...mySalesUpdated, response.data])
              toast.success("Imagem enviada!")
              localStorage.removeItem('PRODUCTID')
            }catch (error){
              console.log(error)
            }
          })
    })
    })
  }

  const openMySalesModal = (itemId: any) => {
    setRemoveMySalesModal(!removeMySalesModal)
    localStorage.setItem('@PRODUCTID', itemId.toString())
  }

  const removeMySale = async () => {
    const token = localStorage.getItem('@TOKEN')
    const productId = localStorage.getItem('@PRODUCTID')
    try{
      const response = await api.delete(`/products/${productId}`, {headers: {'Authorization': `Bearer ${token}`}})
      setRemoveMySalesModal(!removeMySalesModal)
      toast.success("Anúncio removido!")
      window.location.reload()
    }catch(error){
      console.log(error)
    }
  }
  

  return (
    <ProductsContext.Provider
      value={{ list, setList, createSale, createSaleModal, setCreateSaleModal, filteredProducts, setFilteredProducts, searchProducts, addProductImg, setMySales, mySales, setProductFilesModal, productFilesModal, addImgToProduct, removeMySale, removeMySalesModal, setRemoveMySalesModal, openMySalesModal}}>
      {children}
    </ProductsContext.Provider>
  );
};
