import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormValues, UserContext } from "../../providers/UserContext";
import Input from "../Input";

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
    <form onClick={handleSubmit(submit)}>
      <h2>Bem vindo de volta!</h2>
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
      <p>Não possui uma conta?</p>
      <button>Entrar</button>
      <button>Voltar para o início</button>
    </form>
  );
};
