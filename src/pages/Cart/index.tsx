import React, { useContext } from "react";
import { CartStyles } from "./styles";
import logo from "../../assets/LogoShop.svg";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../providers/CartContext";
import { IProducts } from "../../providers/productsContext";

export const Cart = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  const { cart, removeProduct, totalValue } = useContext(CartContext);
  return (
    <CartStyles>
      <header>
        <div>
          <button onClick={backToHome} className="logo">
            <img src={logo} alt="Logo da Mundo Shop" />
          </button>
          <nav>
            <Link to={"/"}>Início</Link>
            <Link to={"/dashboard"}>Meu perfil</Link>
          </nav>
        </div>
      </header>
      {(!cart || cart.length === 0) && (
        <main className="carrinhoOff">
          <h1> Carrinho de compras </h1>
          <div className="listOff">
            <h2>O seu carrinho está vazio</h2>
            <p>
              Não sabe o que comprar? Vários produtos estão esperando por você!
            </p>
            <Link to={"/"}>Conferir ofertas</Link>
          </div>
        </main>
      )}
      {cart &&
        cart.map((item) => {
          return (
            <main className="carrinhoOn">
              <h1> Carrinho de compras </h1>
              <div className="overflow-container">
                <ul className="listOn">
                  <li>
                    <div className="img-container">
                      <img
                        src={item.img}
                        alt={`Imagem do produto ${item.name}`}
                      />
                    </div>
                    <div className="name-container">
                      <h2>{item.name}</h2>
                      <p>{item.category}</p>
                    </div>
                    <button
                      onClick={() => removeProduct(item.id)}
                      className="button-remove"
                    >
                      X
                    </button>
                  </li>
                </ul>
              </div>
            </main>
          );
        })}

      {cart && (
        <aside>
          <div>
            <h2>Total</h2>
            <p>
              R${" "}
              {cart.reduce(
                (prevValue: number, currentValue: IProducts) =>
                  prevValue + Number(currentValue.price),
                0
              )}
            </p>
          </div>
          <button>Finalizar compras</button>
        </aside>
      )}
    </CartStyles>
  );
};
