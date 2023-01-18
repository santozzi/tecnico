import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React, { useEffect, useState } from "react";
import { Persona } from "../../models/interfaces/persona";
import {
  ascendente as fAscendente,
  descendente as fDescendente,
} from "../../services/filtrosCliente";
import { resolve } from "node:path/win32";
import { ImSortAmountAsc, ImSortAmountDesc } from "react-icons/im";
export interface FiltersInterface {
  clientes: Promise<Persona[]>;
  resultadoFiltrado: (clientes: Persona[]) => void;
  
}

const Filters: React.FC<FiltersInterface> = ({
  clientes,
  resultadoFiltrado,
 
}) => {
  const [search, setSearch] = useState<string>("");
  const [filtroAs, setFiltroAs] = useState<boolean>(false);
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [inicio, setInicio] = useState<boolean>(true);
  const [ascendente, setAscendente] = useState<boolean>(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const filtroAlfabetico = () => {
    let valor = ascendente;
	setAscendente(!ascendente);
	if (!valor) {
		fAscendente(personas);
		resultadoFiltrado(personas)
	
	   } else {
	
		fDescendente(personas);
		resultadoFiltrado(personas)
	
		
	   }
	   
  };
  useEffect(() => {
    if (inicio) {
      clientes.then((c) => {
        setPersonas(c);
        if (c.length > 0) {
          setInicio(false);
        }
		fAscendente(c);
		resultadoFiltrado(c)
      });

    
    } else {
      if (!search) {
        resultadoFiltrado(personas);
      } else {
        let res: Persona[] = personas.filter(
          (cliente) =>
            cliente.nombre?.toLowerCase().includes(search.toLowerCase()) ||
            cliente.apellido?.toLowerCase().includes(search.toLowerCase())
        );

        resultadoFiltrado(res);
      }
	  	
    }

  }, [search,personas]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PersonSearchIcon fontSize="large" sx={{ marginTop: "1rem" }} />
      <TextField
        id="outlined-basic"
        label="Buscar"
        variant="outlined"
        size="small"
        onChange={handleSearch}
        sx={{ marginTop: "1rem" }}
      />
     
      {ascendente ? (
        <Box
          component={Button}
          sx={{
            marginTop: "1rem",
            marginLeft: "1rem",
            border: "1px solid #cccccc",
            padding: "0.5rem",
          }}
          onClick={() => filtroAlfabetico()}
        >
          <ImSortAmountAsc size={22} />
        </Box>
      ) : (
        <Box
          component={Button}
          sx={{
            marginTop: "1rem",
            marginLeft: "1rem",
            border: "1px solid #cccccc",
            padding: "0.5rem",
          }}
          onClick={() => filtroAlfabetico()}
        >
          <ImSortAmountDesc size={22} />
        </Box>
      )}



    </Box>
  );
};

export default Filters;
