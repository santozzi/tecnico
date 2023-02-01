import { Box, Button } from "@mui/material";
import React from "react";
import { IArticulo } from "../../../../../models/interfaces/articulo";
import Buscar from "../../../../../utils/Filters/Buscar/Buscar";
import FiltroArticulos from "../../../../../utils/Filters/FitroArticulos/FiltroArticulos";
export interface ArticuloServicioInterface {
  articulos: IArticulo[];
  articuloFunction: (articulo: IArticulo) => void;
  manejadorDeArticulos:(articulos: IArticulo[])=>void;
}

const ArticuloServicio: React.FC<ArticuloServicioInterface> = ({
  articulos = [],
  articuloFunction,
  manejadorDeArticulos
}) => {
  return (
    <Box>
	  	<FiltroArticulos articulos={articulos} manejadorDeArticulos={manejadorDeArticulos}/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid #c4c4c4",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1.1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "6rem",
            }}
          >
            Id
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "6rem",
            }}
          >
            Tipo
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "6rem",
            }}
          >
            Marca
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "7rem",
            }}
          >
            Modelo
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "11rem",
            }}
          >
            Nombre
          </Box>
        </Box>

        {articulos.map((articulo: IArticulo, index) => {
          return (
            <Box
              component={Button}
              onClick={() => articuloFunction(articulo)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                backgroundColor: index % 2 === 0 ? "lightgrey" : "lightblue",
                borderRadius: 0,
              }}
            >
              <Box sx={{ width: "6rem" }}>
                {articulo.serieDef !== ""
                  ? articulo.serieDef
                  : articulo.serieProv}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "6rem",
                }}
              >
                {articulo.tipo}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "6rem",
                }}
              >
                {articulo.marca}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "7rem",
                }}
              >
                {articulo.modelo}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "11rem",
                }}
              >
                {`${articulo.aCargoDe}, ${articulo.aCargoDe}`}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ArticuloServicio;
