import { createContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IDefaultProviderProps {
    children: React.ReactNode;
}

interface IVerifictionContext {
    VerificationLogin: () => void
    token: string | null
    OpenMenu: () => void
    navigate: NavigateFunction
    stateMenu: boolean
}

export const VerifictionContext = createContext({} as IVerifictionContext);

export const VerifictionProvider = ({ children }: IDefaultProviderProps) => {
    const token = localStorage.getItem("@TOKEN")
    const navigate = useNavigate()
    const [ stateMenu, setStateMenu ] = useState(false)

    const VerificationLogin = () => {

        if (!token) {
            return navigate("/login")
        } else {
            return navigate("/dashboard")
        }
    }

    const OpenMenu = () => {
        if(!stateMenu) {
            setStateMenu(true)
        }
        else {
            setStateMenu(false)
        }
    }

    

    return (
        <VerifictionContext.Provider value={{ VerificationLogin, token, navigate, OpenMenu, stateMenu}}>
            {children}
        </VerifictionContext.Provider>
    );
};