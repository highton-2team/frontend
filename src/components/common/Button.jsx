import React from "react";
import { ButtonStyle } from "./style";

const Button = ({
  color,
  size,
  disable = false,
  children,
  variant = "contained",
}) => {
  return (
    <ButtonStyle color={color} size={size} disable={disable} variant={variant}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
