import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { StyledTextField } from "./style";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn<string>;
  errors?: FieldError;
}

const Input = ({ label, type, register, errors }: IInputProps) => (
  <fieldset>
    <StyledTextField type={type} label={label} {...register} />
    <p>{errors ? <p>{errors.message}</p> : null}</p>
  </fieldset>
);

export default Input;
