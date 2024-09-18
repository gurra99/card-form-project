import React from "react";
import { Button, VariantColor, VariantSize } from "../button/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClickAddToList?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled: boolean;
  description: string;
}

export function SubmitButton(props: ButtonProps) {
  const { onClickAddToList, disabled, description } = props;

  return (
    <Button
      onClick={onClickAddToList}
      variantColor={disabled ? VariantColor.Negative : VariantColor.Primary}
      variantSize={VariantSize.Medium}
      data-cy="create-button"
      disabled={disabled}
    >
      {description}
    </Button>
  );
}
