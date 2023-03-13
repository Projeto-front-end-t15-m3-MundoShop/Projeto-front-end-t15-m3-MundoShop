import { useContext, useEffect } from "react"
import { CartProducts } from "../../components/CardProduct"
import { ProductsContext } from "../../providers/productsContext"
import fundo from "../../assets/FundoMainPage.png"
import { Header } from "../../components/Header"
import { StylesSectionFundo } from "./stylesFundo"
import { StylesSectionProducts } from "./stylesListProducts"
import { StylesMainPage } from "./stylesMainpage"

export const MainPage = () => {

    const { searchProducts } = useContext(ProductsContext)

    useEffect(() => {

    }, [searchProducts])

    return (
        <StylesMainPage>
            <Header />
            <StylesSectionFundo>
                <img src={fundo} alt="Mundo Shop" />
            </StylesSectionFundo>
            <StylesSectionProducts>
                <h1>Nossos produtos</h1>
                <ul>
                    {searchProducts.length <= 0 ? (<li><h1>Produto Não encontrado</h1></li>) : (searchProducts.map((product, index) => { return <CartProducts key={index} product={product}></CartProducts> }))}
                </ul>
            </StylesSectionProducts>
        </StylesMainPage>
    )
}