import { IProducts } from "../../providers/productsContext";
import { StylesCard } from "./styles";
import cart from "../../assets/carrinho.png";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";

interface IProductsProps {
  product: IProducts;
}

export const CardProducts = ({ product }: IProductsProps) => {
  const { addToCart } = useContext(CartContext);
  return (
    <StylesCard>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>R$ {product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)} className="button-cart">
        <img src={cart} alt="Adicionar produto ao carrinho" />
      </button>
    </StylesCard>
  );
};
