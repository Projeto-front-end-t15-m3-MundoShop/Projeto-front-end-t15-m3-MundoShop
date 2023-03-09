import logo from '../../assets/Logo.png'
import { StylesHeader } from './styles'

export const Header = () => {
    return (
        <StylesHeader>
            <nav>
                <img src={logo} alt="logo Mundo shop" />
                <p>inicio</p>
                <div>
                    <h3>Nossos Produtos</h3>
                    <h3>Meu perfil</h3>
                </div>
                <div>
                    <h3>Crie sua conta</h3>
                    <h2>Entrar</h2>
                </div>
                <form>
                    <input type="text" name="" id="" placeholder="Produtos, Roupas ..." />
                    <button></button>
                </form>
                <button>carrinho</button>
            </nav>
        </StylesHeader>
    )
}