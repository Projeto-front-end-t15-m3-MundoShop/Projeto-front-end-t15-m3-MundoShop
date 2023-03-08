import logo from '../../assets/Logo.png'

export const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo Mundo shop" />
                <p>inicio</p>
                <h3>Nossos Produtos</h3>
                <h3>Meu perfil</h3>
                <form>
                    <input type="text" name="" id="" placeholder="Produtos, Roupas ..."/>
                    <button></button>
                </form>
                <h3>Crie sua conta</h3>
                <h2>Entrar</h2>
                <button>carrinho</button>
            </nav>
        </header>
    )
}