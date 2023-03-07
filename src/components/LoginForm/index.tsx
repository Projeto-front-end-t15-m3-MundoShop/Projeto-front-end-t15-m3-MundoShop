import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormValues, UserContext } from "../../providers/UserContext";
import Input from "../Input";
import {
  ButtonBack,
  ButtonEntrar,
  ButtonLogin,
  DivTest,
  FormLogin,
  H2Login,
  Link,
} from "./style";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormValues> = (FormData) => {
    userLogin(FormData);
  };

  return (

    <DivTest>
      <FormLogin onSubmit={handleSubmit(submit)}>
        <H2Login>Bem vindo de volta!</H2Login>
        <Input
          label="Seu e-mail"
          type="email"
          register={register("email")}
          errors={errors.email}
        />
        <Input
          label="Sua senha"
          type="password"
          register={register("password")}
          errors={errors.password}
        />
        <Link to={"/register"}>Não possui uma conta?</Link>
        <ButtonLogin>
          <ButtonEntrar type='submit'>Entrar</ButtonEntrar>
          <ButtonBack>Voltar para o início</ButtonBack>
        </ButtonLogin>
      </FormLogin>
    </DivTest>
  );
};
