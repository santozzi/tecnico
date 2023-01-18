import { Box } from "@mui/material";
import React from "react";
import { Prioridad } from "../interfaces/Prioridad";
import { TodoList } from "../TodoContainer";
import ItemCliente from "./ItemTodo/ItemCliente";

export interface TarjetaClienteInterface {
	list:TodoList;
}

const TarjetaTodo: React.FC<TarjetaClienteInterface> = ({list}) => {
	const alta:Prioridad={
		id:1,
		nombre:"ALTA"
	}
	const media:Prioridad={
		id:2,
		nombre:"MEDIA"
	}
	const baja:Prioridad={
			id:3,
			nombre:"BAJA"
		}
		const prioridadColor = (prioridad: string): string => {
			let color = "white";
			switch (prioridad) {
			  case "ALTA":
				color = "#f79098";
				break;
			  case "MEDIA":
				color = "#FFE57C";
				break;
			  case "BAJA":
				color = "#98E178";
			}
		
			return color;
		  };
		  const DateMask = (date: Date): string => {
			const day = date.getDate();
			const month = date.getMonth() + 1;
			const year = date.getFullYear();
		
			let dia: string = day + "";
			let mes: string = month + "";
			let anio: string = year + "";
			if (day < 10) {
			  dia = `0${day}`;
			}
			if (month < 10) {
			  mes = `0${month}`;
			}
			if (year < 10) {
			  anio = `0${year}`;
			}
			return `${dia}/${mes}/${anio.charAt(2)}${anio.charAt(3)}`;
		  };
		  const diaEntrega = (): string => {
			const fechaDeHoy: number = new Date().getTime();
			const fechaEstimada: number = list?.fechaAproximada.getTime()||0;
			const diasDif = Math.ceil(
			  (fechaEstimada - fechaDeHoy) / 1000 / 60 / 60 / 24
			);
		
			if (diasDif <= 1) {
			  return "#f79098";
			} else if (diasDif <= 3) {
			  return "#FFE57C";
			} else {
			  return "#98E178";
			}
		  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "15rem",
        margin: "1rem",
        border: `1px solid ${prioridadColor(list.prioridad.nombre)}`,
        padding: "2rem",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          borderBottom: `1px solid ${prioridadColor(list.prioridad.nombre)}`,
          paddingBottom: "1rem",
        }}
      >
        <Box>{list.cliente}</Box>
        <Box sx={{
			borderRadius:'10px',
			padding:'0.2rem 0.5rem',
			backgroundColor:prioridadColor(list.prioridad.nombre)
		}}>{list.prioridad.nombre}</Box>
      </Box>
      <Box   sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "space-between",
			flexDirection:'column',
			paddingTop:'1rem'
			
          }}>
			<ItemCliente descripcion="N° de Orden:" valor={list.orden} />
			<ItemCliente descripcion="Artículo:" valor={list.articulo} />
			<ItemCliente descripcion="Ingreso:" valor={DateMask(list.fechaIngreso)} />
			<ItemCliente descripcion="Estimado:" valor={DateMask(list.fechaAproximada)} color={diaEntrega()}/>

		
      </Box>
    </Box>
  );
};

export default TarjetaTodo;
