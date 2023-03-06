import { createContext, useState } from "react";
import { api } from "../Services/api";

interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface IUser {
  email: string;
  name: string;
  id: number;
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
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const userLogin = async (FormData: ILoginFormValues) => {
    try {
      const response = await api.post("/login", FormData);
      setUser(response.data);
      localStorage.setItem("@TOKEN", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister = async (FormData: IRegisterFormValues) => {
    try {
      const response = await api.post("/register", FormData);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
