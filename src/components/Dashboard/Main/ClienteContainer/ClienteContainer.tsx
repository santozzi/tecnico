import { Box, TextField } from "@mui/material";
import React, { useEffect, useState, KeyboardEvent } from "react";
import { Cliente, Persona } from "../../../../models/interfaces/persona";
import { findAll } from "../../../../services/cliente";
import { clienteContainer as classes } from "./styles/clienteContainer";
import TarjetaCliente from "./TarjetaCliente/TarjetaCliente";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Diversity1 } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { ascendente, descendente } from "../../../../services/filtrosCliente";
import EditTarjetaCliente from "./TarjetaCliente/EditTarjetaCliente/EditTarjetaCliente";
import Usuario from "../Usuario/Usuario";
import { Modal } from "../../../../utils/Modal";
import Filters from "../../../../utils/Filters/Filters";
import { rejects } from "assert";
import { resolve } from "path";

export interface ClienteContainerInterface {}

const ClienteContainer: React.FC<ClienteContainerInterface> = () => {
  const [clientes, setClientes] = useState<Promise<Persona[]>>(
    new Promise((resolve, rejects) => resolve([]))
  );
  const [cliente, setCliente] = useState<Cliente>({});
  const [resultado, setResultado] = useState<Persona[]>([]);
  const [boole, setBoole] = useState(false);
  const [ingresar, setIngresar] = useState(true);

  /*
     ESTADOS PARA EL MODAL DE EDICION DE CLIENTE
  */
  const [open, setOpen] = React.useState(false);
  const [nuevo, setNuevo] = React.useState(false);
  const clienteSeleccion = (cliente: Cliente) => {
    setCliente(cliente);
    setNuevo(false)
;    setOpen(true);
  };
  //let resultado: Persona[] = [];
  const resultadoFiltrado = (clientesFiltrados: Persona[]) => {
    setResultado(clientesFiltrados);
    setBoole(!boole);
  };

  const idHandle = (id: string) => {
    setOpen(true);
  };
  const closeHandler = () => {
    setBoole(!boole);
    setOpen(false);
  };
  const nuevoHandler=()=>{
    setNuevo(true);
    setOpen(true);
  }

  useEffect(() => {
    if (ingresar) {
      findAll().then((cliente) => {
        setClientes(
          new Promise((resolve, rejects) => {
            resolve(cliente);
          })
        );
      });
      setIngresar(false);
    }
  }, [resultado, boole]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
 
        
      
      }}>
      <Filters
        clientes={clientes}
        resultadoFiltrado={resultadoFiltrado}
        
      />
      <Box
          component={Button}
          onClick={nuevoHandler}
          sx={{
            marginTop: "1rem",
            marginLeft: "1rem",
            border: "1px solid #cccccc",
            padding: "0.5rem",
          }}
       
        >
          <PersonAddIcon  sx={{color:'#059862'}}/>
        </Box>
 
     </Box>
      <Box sx={classes().containerBase}>
        {resultado.map((cliente, index) => {
          return (
            <TarjetaCliente
              key={index}
              cliente={cliente}
              catchId={idHandle}
              seleccionCliente={clienteSeleccion}
            />
          );
        })}
      </Box>
      <Modal
        open={open}
        onClose={closeHandler}
        // componente={Usuario}
      >
       {(!nuevo) 
       ?<EditTarjetaCliente key={cliente.id} onClose={closeHandler} cliente={cliente} tipo='editar'/>
       :<EditTarjetaCliente  onClose={closeHandler}  tipo='nuevo'/>
       }
      </Modal>
    </Box>
  );
};

export default ClienteContainer;
