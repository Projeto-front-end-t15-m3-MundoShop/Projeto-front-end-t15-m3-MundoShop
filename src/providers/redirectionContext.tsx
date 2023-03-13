import { createContext } from "react";
import { useNavigate } from "react-router-dom";

interface IDefaultProviderProps {
    children: React.ReactNode;
}

interface IVerifictionContext {
    VerificationLogin: () => void
}

export const VerifictionContext = createContext({} as IVerifictionContext);

export const VerifictionProvider = ({ children }: IDefaultProviderProps) => {

    const VerificationLogin = () => {
        const token = localStorage.getItem("@TOKEN")
        const navigate = useNavigate()

        if (!token) {
            return navigate("/login")
        } else {
            return navigate("/dashboard")
        }
    }

    return (
        <VerifictionContext.Provider value={{ VerificationLogin }}>
            {children}
        </VerifictionContext.Provider>
    );
};