import styled from "@emotion/styled";
import React from "react";

const ContenedorResultado = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 900px;
  margin: auto;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

const Info = styled.p`
  font-size: 18px;
  margin: 10px 0;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  margin: 10px 0;
  
  span {
    font-weight: bold;
  }
`;

export const Cotizacion = ({ resultado,loading }) => {
  if (Object.keys(resultado).length === 0 || loading) return null;

  return (
    <ContenedorResultado>
      <div>
        <Precio>
          El precio es: <span>{resultado.PRICE}</span>
        </Precio>
        <Info>
          Ultima actualizacion: <span>{resultado.LASTUPDATE}</span>
        </Info>
      </div>
      <div>
        <Info>
          Precio mas alto del dia: <span>{resultado.HIGHDAY}</span>
        </Info>
        <Info>
          Precio mas bajo del dia: <span>{resultado.LOWDAY}</span>
        </Info>
        <Info>
          Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
        </Info>
      </div>
    </ContenedorResultado>
  );
};
