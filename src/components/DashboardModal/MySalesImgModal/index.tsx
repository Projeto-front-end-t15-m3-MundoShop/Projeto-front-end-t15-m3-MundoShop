import { useContext } from "react"
import { DropzoneProducts} from "../../Dropzone"
import { ProductsContext } from "../../../providers/productsContext"
import { StyledModalDiv } from "../EditProfileModal/style"

const MySalesImgModal = () => {
    const {productFilesModal, setProductFilesModal, addProductImg} = useContext(ProductsContext)   

    if(productFilesModal){
        return (
          <StyledModalDiv>
            <div className="modal__container">
                <div className="modal__header">
                    <h2>Importar imagem</h2>
                    <span onClick={() => setProductFilesModal(!productFilesModal)}>X</span>
                </div>
                <form onSubmit={() => addProductImg(event)}>
                    <DropzoneProducts/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
          </StyledModalDiv>
        )
    }else{
        return null
    }
}

export default MySalesImgModal