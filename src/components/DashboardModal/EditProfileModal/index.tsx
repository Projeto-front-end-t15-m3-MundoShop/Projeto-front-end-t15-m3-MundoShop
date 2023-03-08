import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import Input from "../../Input"
import { StyledModalDiv } from "./style"
import {useForm} from 'react-hook-form'
import {  yupResolver  } from '@hookform/resolvers/yup' 
import * as yup from 'yup'

const EditProfileModal = () => {
    const {editProfileModal, setEditProfileModal, editProfile} = useContext(UserContext)
    const {register, handleSubmit, formState: {errors}} = useForm()

    if(editProfileModal){
        return (
          <StyledModalDiv>
            <div className="modal__container">
                <div className="modal__header">
                    <h2>Editar Perfil</h2>
                    <span onClick={() => setEditProfileModal(!editProfileModal)}>X</span>
                </div>
                <form onSubmit={handleSubmit(editProfile)}>
                    <Input label="Avatar" type="file" {...register('avatar')} InputLabelProps={{ shrink: true }}/>
                    <Input label="Nome" type="text" {...register('name')}/>
                    <Input label="E-mail" type="text" {...register('email')}/>
                    <Input label="Senha" type="password" {...register('password')}/>
                    <Input label="Endereço" type="text" {...register('address')} placeholder="Rua Exemplo, 300, APTO 101 Florianópolis-Santa Catarina"/>
                    <button type="submit">Enviar alterações</button>
                </form>
            </div>
          </StyledModalDiv>
        )
    }else{
        return null
    }
}

export default EditProfileModal