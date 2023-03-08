import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { StyledTextField } from "./style";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password" | "file";
  register?: UseFormRegisterReturn<string>;
  errors?: FieldError;
  placeholder?: string;
  InputLabelProps?: any;
}

const Input = ({ label, type, register, errors, placeholder, InputLabelProps }: IInputProps) => (
  <fieldset>
    <StyledTextField type={type} label={label} placeholder={placeholder} InputLabelProps={InputLabelProps} {...register} />
    <p>{errors ? <p>{errors.message}</p> : null}</p>
  </fieldset>
);

export default Input;
