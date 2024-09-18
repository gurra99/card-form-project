import React, { ChangeEvent } from "react";
import { Container } from "./input-field.styles";

interface InputFieldProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onChangeHandler: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder?: string;
  dataCy?: string;
  invalid?: boolean;
}

const InputField = (props: InputFieldProps) => {
  return (
    <Container
      name={props.name}
      aria-label={props.name}
      id="name"
      data-cy={props.dataCy}
      value={props.value}
      type={"text"}
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      inputMode="numeric"
      style={props.invalid ? { border: "2px solid var(--color-red)" } : {}}
    ></Container>
  );
};

export default InputField;
