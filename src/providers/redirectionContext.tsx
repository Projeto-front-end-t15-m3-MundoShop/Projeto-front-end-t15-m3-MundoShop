import { createContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IDefaultProviderProps {
    children: React.ReactNode;
}

interface IVerifictionContext {
    VerificationLogin: () => void
    token: string | null
    navigate: NavigateFunction
}

export const VerifictionContext = createContext({} as IVerifictionContext);

export const VerifictionProvider = ({ children }: IDefaultProviderProps) => {
    const token = localStorage.getItem("@TOKEN")
    const navigate = useNavigate()

    const VerificationLogin = () => {

        if (!token) {
            return navigate("/login")
        } else {
            return navigate("/dashboard")
        }
    }

    return (
        <VerifictionContext.Provider value={{ VerificationLogin, token, navigate}}>
            {children}
        </VerifictionContext.Provider>
    );
};