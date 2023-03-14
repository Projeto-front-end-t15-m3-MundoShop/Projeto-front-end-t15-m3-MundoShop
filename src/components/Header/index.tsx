import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import cart from '../../assets/CART.svg'
import menu from '../../assets/menu.svg'
import { VerifictionContext } from '../../providers/redirectionContext'
import { Form } from '../FormSearchProduct'
import { StylesHeader } from './styles'

export const Header = () => {
    const { VerificationLogin, token, navigate, OpenMenu, stateMenu } = useContext(VerifictionContext)
    return (
        <StylesHeader>
            <nav>
                <img src={logo} alt="logo Mundo shop" />
                {!stateMenu ? (<></>) : (<>{!token ? (
                    <div>
                        <Link to={"/register"}>Crie sua conta</Link>
                        <Link to={"/login"}><h2> Entrar </h2></Link>
                    </div>
                ) : (
                    <div>
                        <Link to={"/dashboard"}>Meu perfil</Link>
                        <button onClick={() => {
                            localStorage.removeItem("@TOKEN")
                            localStorage.removeItem("@USERID")
                            navigate('/')
                        }}>Sair</button>
                    </div>
                )}</>)}
                <Form />
                <span onClick={() => OpenMenu()}><img src={menu} alt="" /></span>
                <button><img src={cart} alt="Carrinho" /></button>
            </nav>
        </StylesHeader>
    )
}