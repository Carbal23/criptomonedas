import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import { Formulario } from "./components/Formulario";
import axios from "axios";
import { Cotizacion } from "./components/Cotizacion";
import { Spinner } from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 30px;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
function App() {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consultarCripto = async () => {
      if (moneda.length === 0) return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      setTimeout(() => {
        setLoading(false);
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    };
    consultarCripto();
  }, [criptomoneda, moneda,loading]);

  return (
    <>
      <Contenedor>
        <div>
          <Img src={imagen} alt="imangen crypto" />
        </div>
        <div>
          <Heading>Cotiza criptomonedas al instante</Heading>
          <Formulario
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
            setLoading={setLoading}
          />
        </div>
      </Contenedor>
      <Spinner loading={loading} />
      <Cotizacion resultado={resultado} loading={loading} />
    </>
  );
}

export default App;
