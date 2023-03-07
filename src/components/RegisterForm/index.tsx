import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormValues, UserContext } from "../../providers/UserContext";
import Input from "../Input";

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
    <form onSubmit={handleSubmit(submit)}>
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
      <button>Registrar</button>
      <button>Voltar para o início</button>
    </form>
  );
};
