import styled from "@emotion/styled";
import React, { useState } from "react";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
  `

  const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-size: large;
  `

export const useCriptomoneda = (label, stateInicial, listCripto) => {
  const [cripto, setCripto] = useState(stateInicial);

  const SeleccionarCripto = () => (
    <>
      <Label>{label}</Label>
      <Select
      onChange={e=>setCripto(e.target.value ) }
      value={cripto}
      >
        <option value="">--Selecciona una Criptomoneda--</option>
        {listCripto.map(criptos => (
          <option 
          key={criptos.CoinInfo.Id} 
          value={criptos.CoinInfo.Name}>
            {criptos.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  return {
    cripto,
    SeleccionarCripto,
  };
};