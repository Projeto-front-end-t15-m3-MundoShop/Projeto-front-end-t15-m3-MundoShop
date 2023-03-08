import { Link } from "react-router-dom"
import { IProducts } from "../../providers/productsContext"
import { StylesCard } from "./styles"


interface IProductsProps {
    product: IProducts
}

export const CartProducts = ({product}: IProductsProps) => {
    return (
        <StylesCard>
                {/* <img src={product.img} alt={product.name} /> */}
                <h2>{product.name}</h2>
                <p>R$ {product.price}</p>
        </StylesCard>

    )
}