import { Box, Button } from "@mui/material";
import { Articulo as classes } from "../styles/articulo";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React, { useEffect, useState } from "react";
import { DateMask } from "../../../../../utils/fecha";
import { findAll } from "../../../../../models/prueba/articulo.model";

import {
  IArticulo,
  IArticulo as Item,
  IClave,
  IComputadora,
  IImpresora,
  IStart,
  IWifi,
} from "../../../../../models/interfaces/articulo";
import CPU from "./Computadora/CPU/CPU";
import Notebook from "./Computadora/Notebook/Notebook";
import Impresora from "./Impresora/Impresora";
import FiltroArticulos from "../../../../../utils/Filters/FitroArticulos/FiltroArticulos";

export interface ArticuloInterface {
  color?: string;
  item: Item;
}

const Articulo: React.FC<ArticuloInterface> = ({ item }) => {
  const [desplegar, setDesplegar] = useState(false);
  const [colorDepto, setColorDepto] = useState("#cccccc");
  const [listaClaves, setListaClaves] = useState(false);
  const [clavesSize, setClavesSize] = useState(0);
  const [mapTipo, setMapTipo] = useState<Map<string, any>>(new Map());
  const [articulos, setArticulos] =useState<IArticulo[]>([]);
  
  const tipoClave = (clave: IClave) => {
    if (clave.tipo === "wifi") {
      return (
        <Box sx={{}}>
          <Box>{(clave as IWifi).titulo}</Box>
          <Box>SSID:{(clave as IWifi).ssid}</Box>
          <Box>CLAVE:{(clave as IWifi).clave}</Box>
        </Box>
      );
    } else {
      return (
        <Box>
          <Box>Usuario:{(clave as IStart).usuario}</Box>
          <Box>Clave:{(clave as IStart).clave}</Box>
        </Box>
      );
    }
  };
  const manejadorDeArticulos=(articulos:IArticulo[])=>{
       setArticulos(articulos);
  }
  useEffect(() => {
    setClavesSize((item as IComputadora).claves?.length || 0);
    setMapTipo((f) => f.set("CPU", <CPU articulo={item} />));
    setMapTipo((f) => f.set("Notebook", <Notebook articulo={item} />));
    setMapTipo((f) => f.set("Impresora", <Impresora articulo={item} />));
  }, [item, clavesSize]);

  return (

      <Box
        sx={{
          ...classes().containerBase,
        }}
      >
        <Box sx={{ ...classes().titulo }}>
          <Button onClick={() => setDesplegar((f) => !f)}>
            <Box>
              <Box>{item.tipo}</Box>
              <Box>{`${item.marca} - ${item.modelo} `}</Box>
            </Box>
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "0.2rem",
            }}
          >
            <Box
              sx={{
                color: "#888888",
              }}
            >
              {item.serieDef === "" ? item.serieProv : item.serieDef}
            </Box>
            <Box>{`${item.aCargoDe}`}</Box>
            <Box sx={classes().buttons}>
              {/* --------------BOTON EDITAR------------------- */}
              <Box
                component="button"
                sx={classes().buttonEdit}
              // onClick={()=>seleccionCliente(cliente) }
              >
                <EditIcon fontSize="small" />
              </Box>
              <Box component="button" sx={classes().buttonDelete}>
                <DeleteOutlineIcon fontSize="small" />
              </Box>
            </Box>
          </Box>
        </Box>

        {desplegar && (
          <Box sx={classes().dataContainer}>
            <Box sx={classes().iconoData}>
              <HomeIcon />
              <Box>{`Cliente: ${item.aCargoDe} ${item.aCargoDe} `}</Box>
            </Box>
            <Box sx={classes().iconoData}>
              <CalendarMonthIcon />
              <Box>
                {DateMask(new Date("01/01/1900") || new Date("01/01/1900"))}
              </Box>
            </Box>
            <Box sx={{
              margin: '0.3rem 0.3rem',

            }}>
              {mapTipo.get(item.tipo || "")}
            </Box>

          </Box>
        )}
      </Box>
    
  );
};

export default Articulo;
