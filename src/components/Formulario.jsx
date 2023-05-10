import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useMoneda } from "../hooks/useMoneda";
import { useCriptomoneda } from "../hooks/useCriptomoneda";
import axios from "axios";
import {Error} from "./Error"

const Button = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s, ease;

  &:hover {
    background-color: #3264c0;
    cursor: pointer;
  }
`;
export const Formulario = ({setMoneda, setCriptomoneda, setLoading}) => {
  const [listCripto, setListCripto] = useState([]);
  const [error, setError] = useState(false);

  const monedas = [
    { codigo: "USD", nombre: "Dolar estado unidense" },
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra esterlina" },
  ];
  const { moneda, Seleccionar } = useMoneda("Elige tu moneda", "", monedas);

  const { cripto, SeleccionarCripto } = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listCripto
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setListCripto(resultado.data.Data);
    };
    consultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listCripto.length === 0 || moneda.length === 0) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setCriptomoneda(cripto);
    setMoneda(moneda);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error msg="Todos los campos son obligatorios para la consulta"/>: null}
      <Seleccionar />
      <SeleccionarCripto />
      <Button value={"calcular"} type="submit">
        Calcular
      </Button>
    </form>
  );
};
