import { useContext } from "react"
import { ProductsContext } from "../../../providers/productsContext"
import { StyledRemoveModalDiv } from "../MySalesImgModal/style"


const RemoveMySaleModal = () => {
    const { removeMySalesModal, setRemoveMySalesModal, removeMySale } = useContext(ProductsContext)

    if(removeMySalesModal){
        return (
            <StyledRemoveModalDiv>
                <div className="modal__header--container">
                    <div className="modal__header">
                        <h2>Tem certeza que deseja remover esse anúncio?</h2>
                        <span onClick={() => setRemoveMySalesModal(!removeMySalesModal)}>X</span>
                    </div>
                    <div className="buttons__container">
                        <button className="button__confirm" onClick={() => removeMySale()}>Sim</button>
                        <button className="button__decline" onClick={() => setRemoveMySalesModal(!removeMySalesModal)}>Não</button>
                    </div>    
                </div>
            </StyledRemoveModalDiv>
        )
    }else{
        return null
    }

}

export default RemoveMySaleModal