import { useContext, useEffect } from "react"
import { CartProducts } from "../../components/CardProduct"
import { ProductsContext } from "../../providers/productsContext"
import fundo from "../../assets/fundoMainPage.svg"
import { Header } from "../../components/Header"

export const MainPage = () => {

    const { list } = useContext(ProductsContext)

    useEffect(() => {

    }, [list])

    return (
        <div>
            <Header/>
            <section>
                <img src={fundo} alt="Mundo Shop" />
            </section>
            <section>
                <ul>
                     {list.length <= 0 ? (<li><h1>Sem produtos a venda</h1></li>) : (list.map((product, index) => 
                     {return <CartProducts key={index} product={product}></CartProducts> }))}
                </ul>
            </section>
        </div>
    )
}