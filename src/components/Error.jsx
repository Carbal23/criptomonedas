import styled from "@emotion/styled";
import React from "react";

const MensajeError = styled.p`
  background-color: #b7322c;
  padding: .5rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
  border-radius: 10px;
  margin: 15px 10px;
`;

export const Error = ({ msg }) => {
  return <MensajeError>{msg}</MensajeError>;
};
