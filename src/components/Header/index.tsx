import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import { VerifictionContext } from '../../providers/redirectionContext'
import { Form } from '../FormSearchProduct'
import { StylesHeader } from './styles'

export const Header = () => {
    const { VerificationLogin } = useContext(VerifictionContext)
    return (
        <StylesHeader>
            <nav>
                <img src={logo} alt="logo Mundo shop" />
                <Link to={"/"}> <p>Inicio</p>  </Link>
                <div>
                    <h3>Nossos Produtos</h3>
                    <Link to={"/dashboard"}>Meu perfil</Link>
                </div>
                <div>
                    <Link to={"/register"}>Crie sua conta</Link>
                    <Link to={"/login"}><h2> Entrar </h2></Link>
                </div>
                <Form/>
                <button>carrinho</button>
            </nav>
        </StylesHeader>
    )
}