import styled from "@emotion/styled";
import React, { useState } from "react";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 1.5rem;
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

export const useMoneda = (label, stateInicial, monedas) => {
  const [moneda, setMoneda] = useState(stateInicial);

  const Seleccionar = () => (
    <>
      <Label>{label}</Label>
      <Select
      onChange={e=>setMoneda(e.target.value ) }
      value={moneda}
      >
        <option value="">--Selecciona una Moneda--</option>
        {monedas.map((moneda) => (
          <option key={moneda.codigo} value={moneda.codigo}>
            {moneda.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return {
    moneda,
    Seleccionar,
    setMoneda,
  };
};
