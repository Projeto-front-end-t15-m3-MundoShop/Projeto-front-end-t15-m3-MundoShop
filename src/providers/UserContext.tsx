import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/api";

interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface IUser {
  email: string;
  name: string;
  id: number;
  avatar: string;
  isSeller: boolean;
  adress: string;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
  avatar: string;
  id: number;
  isSeller: boolean;
  adress: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userLogin: (FormData: ILoginFormValues) => Promise<void>;
  userRegister: (FormData: IRegisterFormValues) => Promise<void>;
  getUser:  () => Promise<void>;
  userLogout: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate()

  const userLogin = async (FormData: ILoginFormValues) => {
    try {
      const response = await api.post("/login", FormData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate('/dashboard')
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    const userId = localStorage.getItem('@USERID')
    const token = localStorage.getItem('@TOKEN')
    
    try{
      const response = await api.get(`/users/${userId}`, {headers: {'Authorization': `Bearer ${token}`}})
      const data = response.data
      setUser(data)
    }catch(error){
      console.log(error)
    }
  }

  const userRegister = async (FormData: IRegisterFormValues) => {
    try {
      const response = await api.post("/register", FormData);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null)
    localStorage.removeItem('@TOKEN')
    localStorage.removeItem('@USERID')
    navigate('/')
  }

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, userRegister, getUser, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
