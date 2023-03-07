import logoGlobeImg from '../../assets/Globo.svg'
import logoMundoShopImg from '../../assets/MundoShop.svg'

const Logo = () => {
    return(
        <div>
            <img src={logoGlobeImg} alt='Logo Globo'/>
            <img src={logoMundoShopImg} alt='Logo MundoShop'/>
        </div>
    )
}

export default Logo