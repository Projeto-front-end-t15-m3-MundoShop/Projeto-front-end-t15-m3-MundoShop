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

export interface IEditProfile {
  email?: string;
  name?: string;
  id?: number;
  avatar?: string;
  isSeller?: boolean;
  adress?: string;
  password?: string;
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

export interface IFileProps extends File {
  path?: string
  preview: string
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userLogin: (FormData: ILoginFormValues) => Promise<void>;
  userRegister: (FormData: IRegisterFormValues) => Promise<void>;
  getUser:  () => Promise<void>;
  userLogout: () => void;
  editProfileModal: boolean;
  setEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  editAvatarModal: boolean;
  setEditAvatarModal: React.Dispatch<React.SetStateAction<boolean>>;
  editProfile: (data: IEditProfile) => Promise<void>;
  files: IFileProps[];
  setFiles: React.Dispatch<React.SetStateAction<IFileProps[]>>;
  attAvatar: (event: any) => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [editProfileModal, setEditProfileModal] = useState<boolean>(false);
  const [editAvatarModal, setEditAvatarModal] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileProps[]>([]);

  const navigate = useNavigate()

  const userLogin = async (FormData: ILoginFormValues) => {
    try {
      const response = await api.post("/login", FormData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate('/dashboard')
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

  const editProfile = async (data: IEditProfile) => {
    const userId = localStorage.getItem('@USERID')
    const token = localStorage.getItem('@TOKEN')

    if(data.password === ""){
      delete data.password
    }
    if(data.email === ""){
      delete data.email
    }
    if(data.adress === ""){
      delete data.adress
    }
    if(data.name === ""){
      delete data.name
    }
    
    try{
      const response = await api.patch(`/users/${userId}`, data, {headers: {'Authorization': `Bearer ${token}`}})
      const responseData = response.data
      setUser(responseData)
      setEditProfileModal(!editProfileModal)
    }catch(error){
      console.log(error)
    }
  }

  const attAvatar = async (event: any) => {
    event.preventDefault()
    const userId = localStorage.getItem('@USERID')
    const token = localStorage.getItem('@TOKEN')
    try{
      const response = await api.patch(`/users/${userId}`, {avatar: files[0].preview}, {headers: {'Authorization': `Bearer ${token}`}})
      const responseData = response.data
      setUser(responseData)
      setEditAvatarModal(!editAvatarModal)
    }catch (error){
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, userRegister, getUser, userLogout, editProfileModal, setEditProfileModal, editProfile, editAvatarModal, setEditAvatarModal, files, setFiles, attAvatar}}>
      {children}
    </UserContext.Provider>
  );
};
