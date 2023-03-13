import { useContext, useState } from "react"
import { UserContext, IEditProfile } from "../../../providers/UserContext"
import Input from "../../Input"
import { StyledModalDiv } from "./style"
import {SubmitHandler, useForm} from 'react-hook-form'

const EditProfileModal = () => {
    const {editProfileModal, setEditProfileModal, editProfile, user} = useContext(UserContext)
    const {register, handleSubmit, formState: {errors}} = useForm<IEditProfile>({});

    const submit: SubmitHandler<IEditProfile> = (FormData) => {
      editProfile(FormData);
    };

    if(editProfileModal){
        return (
          <StyledModalDiv>
            <div className="modal__container">
                <div className="modal__header">
                    <h2>Editar Perfil</h2>
                    <span onClick={() => setEditProfileModal(!editProfileModal)}>X</span>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label="Nome" type="text" defaultValue={user?.name} register={register('name')}/>
                    <Input label="E-mail" type="text" defaultValue={user?.email} register={register('email')}/>
                    <Input label="Senha" type="password" register={register('password')} errors={errors.password}/>
                    <Input label="Endereço" type="text" defaultValue={user?.adress} register={register('adress')} placeholder="Rua Exemplo, 300, APTO 101 Florianópolis-Santa Catarina"/>
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