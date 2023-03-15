import { useContext, useEffect } from "react";
import { CardProducts } from "../../components/CardProduct";
import { ProductsContext } from "../../providers/productsContext";
import { Header } from "../../components/Header";
import { StylesSectionProducts } from "./stylesListProducts";
import { StylesMainPage } from "./stylesMainpage";
import logoWhite from "../../assets/MundoShopLogoWhite.svg";
import OffSale from "../../assets/OffSale.svg";

export const MainPage = () => {
  const { searchProducts } = useContext(ProductsContext);
  return (
    <StylesMainPage>
      <Header />

      <div className="banner">
        <div className="text-container--align">
          <div className="text-container--background">
            <div className="text-container">
              <h1>
                <img src={logoWhite} alt="Mundo Shop" />
              </h1>
              <h3>Grandes marcas na MundoShop</h3>
              <h2>
                Produtos com <span>ATÉ 50% OFF</span>
              </h2>
              <a href="#Produtos">
                Ver produtos
                <img
                  src={OffSale}
                  alt="Imagem mostrando um cupom ilustrativo de 50% porcento de desconto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <StylesSectionProducts id="Produtos">
        <h2>Nossos produtos</h2>
        <ul>
          {searchProducts.length <= 0 ? (
            <li>
              <h2>Produto Não encontrado</h2>
            </li>
          ) : (
            searchProducts.map((product, index) => {
              return (
                <CardProducts key={index} product={product}></CardProducts>
              );
            })
          )}
        </ul>
      </StylesSectionProducts>
    </StylesMainPage>
  );
};
