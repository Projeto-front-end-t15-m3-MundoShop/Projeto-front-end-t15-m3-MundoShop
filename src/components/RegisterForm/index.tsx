import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormValues, UserContext } from "../../providers/UserContext";
import Input from "../Input";
import { DivForm, ImgLogo } from "../LoginForm/style";
import { ButtonRegister, ButtonsRegister, FormRegister, Link } from "./style";
import LogoShop from "./../../assets/LogoShop.svg";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (FormData) => {
    userRegister(FormData);
  };

  return (
    <DivForm>
      <div>
        <ImgLogo src={LogoShop} />
      </div>
      <FormRegister onSubmit={handleSubmit(submit)}>
        <h2>Cadastro</h2>
        <Input
          type="text"
          label="Seu nome"
          register={register("name")}
          errors={errors.name}
        />
        <Input
          type="email"
          label="Seu e-mail"
          register={register("email")}
          errors={errors.email}
        />
        <Input
          type="password"
          label="Crie uma senha"
          register={register("password")}
          errors={errors.password}
        />
        <Input
          type="password"
          label="Crie uma senha"
          register={register("password")}
          errors={errors.password}
        />
        <ButtonsRegister>
          <ButtonRegister>Registrar</ButtonRegister>
          <Link to={"/"}>Voltar para o início</Link>
        </ButtonsRegister>
      </FormRegister>
    </DivForm>
  );
};
