import { useContext, useEffect } from "react"
import { CartProducts } from "../../components/CardProduct"
import { ProductsContext } from "../../providers/productsContext"
import fundo from "../../assets/fundoMainPage.svg"
import { Header } from "../../components/Header"
import { StylesSectionFundo } from "./stylesFundo"
import { StylesSectionProducts } from "./stylesListProducts"
import { StylesMainPage } from "./stylesMainpage"

export const MainPage = () => {

    const { list } = useContext(ProductsContext)

    useEffect(() => {

    }, [list])

    return (
        <StylesMainPage>
            <Header/>
            <StylesSectionFundo>
                <img src={fundo} alt="Mundo Shop" />
            </StylesSectionFundo>
            <StylesSectionProducts>
                <ul>
                     {list.length <= 0 ? (<li><h1>Sem produtos a venda</h1></li>) : (list.map((product, index) => 
                     {return <CartProducts key={index} product={product}></CartProducts> }))}
                </ul>
            </StylesSectionProducts>
        </StylesMainPage>
    )
}