import { useContext } from "react"
import { ProductsContext } from "../../providers/productsContext"
import RemoveMySaleModal from "../DashboardModal/RemoveMySaleModal"
import { StyledMyCardLi } from "./style"

const MySalesCard = () => {
    const {mySales, addImgToProduct, setRemoveMySalesModal, removeMySalesModal, openMySalesModal} = useContext(ProductsContext)
 
  return (
    <>
    {mySales?.map(item => (
        <StyledMyCardLi key={item.id}>
          <div>
            {item.img ? <img src={item.img} alt={item.name}/> : null}
          </div>
          <div>
            <h2>{item.name}</h2>
            <p>{item.category}</p>
            <p>R${item.price}</p>
          </div>
          <div>
            <button onClick={() => addImgToProduct(item.id)} >Adicionar fotos</button>
            <button onClick={() => openMySalesModal(item.id)}>Remover anúncio</button>
          </div>
        </StyledMyCardLi>
    ))}
    <RemoveMySaleModal/>
    </>
  )
}

export default MySalesCard