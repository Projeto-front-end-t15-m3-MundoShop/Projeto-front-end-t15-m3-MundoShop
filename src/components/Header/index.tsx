import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/LogoShop.svg";
import cartImg from "../../assets/CART.svg";
import menu from "../../assets/menu.svg";
import { VerifictionContext } from "../../providers/redirectionContext";
import { Form } from "../FormSearchProduct";
import { StylesHeader } from "./styles";
import { CartContext } from "../../providers/CartContext";

export const Header = () => {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  const link = () => {
    navigate("/cart");
  };
  const token = localStorage.getItem("@TOKEN");
  return (
    <>
      <StylesHeader>
        <div className="header-align">
          <img className="logo" src={logo} alt="Logo da Mundo Shop" />
          <div className="cart-container">
            <button onClick={link}>
              <img className="cart" src={cartImg} alt="Logo da Mundo Shop" />
              {cart.length !== 0 && <p>!</p>}
              {cart.length == 0 && <p>0</p>}
            </button>
          </div>
        </div>

        {localStorage.getItem("@TOKEN") ? (
          <nav className="nav-on">
            <Link className="link-align-on" to={"/dashboard"}>
              Meu perfil
            </Link>
          </nav>
        ) : (
          <nav className="nav-off">
            <Link to={"/login"}>Entrar</Link>
            <p>ou</p>
            <Link className="link-align" to={"/register"}>
              Cadastrar-se
            </Link>
          </nav>
        )}
      </StylesHeader>
    </>
  );
};
