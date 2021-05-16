import React from "react";
import { StyledButton } from "./Button.styles";

export const Button: React.FC = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
