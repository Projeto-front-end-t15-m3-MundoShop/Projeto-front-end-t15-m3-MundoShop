import { IProducts } from "../../providers/productsContext"
import { StylesCard } from "./styles"
import img from '../../assets/Apple-Macbook-Pro-A2779.png'

interface IProductsProps {
    product: IProducts
}

export const CartProducts = ({product}: IProductsProps) => {

    return (
        <StylesCard>
            <button>
                <img src={/* product. */img} alt={product.name} />
                <h2>{product.name}</h2>
                <p>R$ {product.price}</p>
            </button>
        </StylesCard>

    )
}