import React, { useState } from "react";
import { Cliente } from "../../../../../models/interfaces/persona";
import { Box,TextField } from "@mui/material";
import { tarjetaClienteStyle as classes } from "../styles/tarjetaClienteStyle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DateMask } from "../../../../../utils/fecha";
import Button from "@mui/material/Button/Button";
import EditTarjetaCliente from "./EditTarjetaCliente/EditTarjetaCliente";

export interface TarjetaClienteInterface {
  cliente: Cliente;
  catchId:(id:string)=>void;
  seleccionCliente:(item:Cliente)=>void
}

const TarjetaCliente: React.FC<TarjetaClienteInterface> = ({ cliente, catchId,seleccionCliente }) => {
  const { nombre, apellido, direccion, dni, id, email, telefono, ingreso } =
    cliente;
    const [activo, setActivo] = useState(true);
	const [isEdit, setIsEdit] = useState(false)
  const saludo = (s:string)=>{}

	const [desplegar, setDesplegar] = useState(false);
    const handlerButton=()=>{
	
	}

	return (
    <Box sx={classes().containerBase}>
      <Box sx={classes().titulo}>
        <Button onClick={() => setDesplegar((f) => !f) }>
          <Box>{`${apellido}, ${nombre}`}</Box>
        </Button>
        <Box sx={classes().buttons}>
			{/* --------------BOTON EDITAR------------------- */}
          <Box component='button'  sx={classes().buttonEdit} onClick={()=>seleccionCliente(cliente) }>
            <EditIcon fontSize="small" />
          </Box>
          <Box component="button" sx={classes().buttonDelete}>
            <DeleteOutlineIcon fontSize="small" />
          </Box>
        </Box>
      </Box>

      {desplegar && (
        <Box sx={classes().dataContainer}>
          <Box sx={classes().iconoData}>
            <HomeIcon />
            <Box>{direccion}</Box>
          </Box>
          <Box sx={classes().iconoData}>
            <PhoneIcon />
            <Box>{telefono}</Box>
          </Box>
          <Box sx={classes().iconoData}>
            <EmailIcon />
            <Box>{email}</Box>
          </Box>
          <Box sx={classes().iconoData}>
            <BadgeIcon />
            <Box>{dni}</Box>
          </Box>
          <Box sx={classes().iconoData}>
            <CalendarMonthIcon />
            <Box>{DateMask(ingreso || new Date("01/01/1900"))}</Box>
          </Box>
		  
		</Box>
 
      )}
	   {/* {(isEdit)&&
	      <EditTarjetaCliente />
	   } */}
    </Box>
  );
};

export default TarjetaCliente;
