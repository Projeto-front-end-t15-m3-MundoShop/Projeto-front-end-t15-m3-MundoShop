import { useContext } from "react"
import DropzoneAvatar from "../../Dropzone"
import { UserContext } from "../../../providers/UserContext"
import { StyledModalDiv } from "../EditProfileModal/style"

const EditAvatarModal = () => {
    const {editAvatarModal, setEditAvatarModal, attAvatar, percent} = useContext(UserContext)   

    if(editAvatarModal){
        return (
          <StyledModalDiv>
            <div className="modal__container">
                <div className="modal__header">
                    <h2>Importar imagem</h2>
                    <span onClick={() => setEditAvatarModal(!editAvatarModal)}>X</span>
                </div>
                <form onSubmit={() => attAvatar(event)}>
                    {percent ? <p>{percent} "% carregados"</p> : null}
                    <DropzoneAvatar />
                    <button type="submit">Enviar</button>
                </form>
            </div>
          </StyledModalDiv>
        )
    }else{
        return null
    }
}

export default EditAvatarModal