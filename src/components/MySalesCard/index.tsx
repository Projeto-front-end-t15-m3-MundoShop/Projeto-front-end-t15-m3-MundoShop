import { useContext } from "react"
import { ProductsContext } from "../../providers/productsContext"
import RemoveMySaleModal from "../DashboardModal/RemoveMySaleModal"
import { StyledMyCardLi, StyledMySalesCardContainerButton } from "./style"

const MySalesCard = () => {
    const {mySales, addImgToProduct, setRemoveMySalesModal, removeMySalesModal, openMySalesModal} = useContext(ProductsContext)
  return (
    <>
      {mySales?.map((item) => (
        <StyledMyCardLi key={item.id}>
          <div className="container__image">
            <div>
              {item.img ? <img src={item.img} alt={item.name} /> : null}
            </div>
            <div>
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <p className="card__price">R${item.price}</p>
            </div>
          </div>
          <StyledMySalesCardContainerButton>
            <button onClick={() => addImgToProduct(item.id)}>
              Adicionar fotos
            </button>
            <button className="remove__sale" onClick={() => openMySalesModal(item.id)}>Remover anúncio</button>
          </StyledMySalesCardContainerButton>
        </StyledMyCardLi>
    ))}
    <RemoveMySaleModal/>

    </>
  )
}

export default MySalesCard
