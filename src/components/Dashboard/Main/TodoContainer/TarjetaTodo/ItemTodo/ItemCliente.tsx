import { Box } from "@mui/material";
import React from "react";
import { TodoList } from "../../TodoContainer";
export interface ItemClienteInterface {
  descripcion?: string;
  valor?: string;
  color?:string;
}

const ItemCliente: React.FC<ItemClienteInterface> = ({
  descripcion,
  valor,
  color=""
}) => {
 console.log(color);
 
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box>{descripcion}</Box>
      {
	    (color==="")
		?<Box>{valor}</Box>
	    :<Box sx={{
			backgroundColor:color,
			borderRadius:'10px',
			padding:'0.1rem'
		}}>{valor}</Box>
	  }
    </Box>
  );
};

export default ItemCliente;
