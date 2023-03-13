import { TextFieldProps } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form/dist/types";
import { PErro, StyledTextField } from "./style";

interface IInputProps{
  label: string;
  type: "text" | "email" | "password" | "file";
  register?: UseFormRegisterReturn<string>;
  errors?: FieldError | undefined;
  placeholder?: string;
  InputLabelProps?: any;
  value?: string;
  onChange?: (event: any) => void;
  defaultValue?: string
}

const Input = ({
  label,
  type,
  register,
  errors,
  placeholder,
  InputLabelProps,
  value,
  onChange,
  defaultValue
}: IInputProps) => (
  <fieldset>
    <StyledTextField
      type={type}
      label={label}
      value={value}
      placeholder={placeholder}
      InputLabelProps={InputLabelProps}
      onChange={onChange}
      {...register}
      defaultValue={defaultValue}
    />
    {errors ? <PErro>{errors.message}</PErro>: null}
  </fieldset>
);

export default Input;
