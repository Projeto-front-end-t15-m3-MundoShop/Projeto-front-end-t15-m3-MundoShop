import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import cart from '../../assets/CART.svg'
import { VerifictionContext } from '../../providers/redirectionContext'
import { Form } from '../FormSearchProduct'
import { StylesHeader } from './styles'

export const Header = () => {
    const { VerificationLogin, token, navigate } = useContext(VerifictionContext)
    return (
        <StylesHeader>
            <nav>
                <img src={logo} alt="logo Mundo shop" />
                {!token ? (<></>) : (<div>
                    <Link to={"/dashboard"}>Meu perfil</Link>
                    <button onClick={() => {
                        localStorage.removeItem("@TOKEN")
                        localStorage.removeItem("@USERID")
                        navigate('/')
                    }}>Sair</button>
                </div>)}
                <div>
                    <Link to={"/register"}>Crie sua conta</Link>
                    <Link to={"/login"}><h2> Entrar </h2></Link>
                </div>
                <Form />
                <button><img src={cart} alt="Carrinho" /></button>
            </nav>
        </StylesHeader>
    )
}