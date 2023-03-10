import { useContext, useState } from 'react'
import lupa from '../../assets/lupaPesquisa.svg'
import { ProductsContext } from '../../providers/productsContext'

export const Form = () => {
    
    const { setFilteredProducts } = useContext(ProductsContext)
    
    const [searchValue, setSearchValue] = useState("")

    const submit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setFilteredProducts(searchValue)
        setSearchValue("")
    }

    return (
        <form onSubmit={submit}>
            <input type="text" 
            value={searchValue} 
            placeholder="Produtos, Roupas ..."
            onChange={(event) => setSearchValue(event.target.value)}/>
            <button type='submit'> <img src={lupa} alt="Pesquisar" /></button>
        </form>
    )
}