import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormValues, UserContext } from "../../providers/UserContext";
import Input from "../Input";
import {
  ButtonBack,
  ButtonEntrar,
  ButtonLogin,
  DivForm,
  FormLogin,
  H2Login,
  ImgLogo,
  Link,
} from "./style";
import LogoShop from "./../../assets/LogoShop.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().required("É-mail obrigatorio!"),
  password: yup.string().matches(/.{6,}/, "Deve conter 6 caracteres!"),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(schema),
  });

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormValues> = (FormData) => {
    userLogin(FormData);
  };

  return (
    <DivForm>
      <div>
        <ImgLogo src={LogoShop} />
      </div>
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
          <ButtonEntrar type="submit">Entrar</ButtonEntrar>
          <ButtonBack>Voltar para o início</ButtonBack>
        </ButtonLogin>
      </FormLogin>
    </DivForm>
  );
};
