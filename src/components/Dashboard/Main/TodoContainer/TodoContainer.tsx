import { Box, useMediaQuery } from '@mui/material';
import React,{useEffect, useState} from 'react';
import { Prioridad } from './interfaces/Prioridad';
import TarjetaTodo from './TarjetaTodo/TarjetaTodo';
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

export interface TodoInterface {}
export interface TodoList{
	orden:string;
	articulo:string;
	cliente:string;
	prioridad:Prioridad;
	fechaIngreso:Date;
	fechaAproximada:Date;
}



const lista:TodoList[]=[
	{
		orden:"0001",
		articulo:"BS471",
		cliente:"Sergio",
		prioridad:alta,
		fechaIngreso:new Date("1/3/2023"),
		fechaAproximada:new Date("1/5/2023")
	},
	{
		orden:"0002",
		articulo:"NOT156",
		cliente:"Sergio Antozzi",
		prioridad:baja,
		fechaIngreso:new Date("1/3/2023"),
		fechaAproximada:new Date("1/3/2023")
	},	
	{
		orden:"0003",
		articulo:"CPU8759",
		cliente:"Maggini del Clan McCloud",
		prioridad:media,
		fechaIngreso:new Date("1/3/2023"),
		fechaAproximada:new Date("1/6/2023")
	
	}
];
export const celuSize = '(min-width:600px)';

const TodoContainer : React.FC<TodoInterface> = () => {
	const [list, setList] = useState<TodoList[]>([]);
	const matches = useMediaQuery(celuSize);
	useEffect(() => {
	   setList(lista);
	   
	}, [])
	
	return (
		<Box sx={{
			display:'flex',
			alignItems:'center',
			justifyContent:'center',
			flexWrap:'wrap',
			width:'100%',
			margin:'2rem'
		}}>
		
           {
              list.map((todo:TodoList,index)=>{
			  return (
			      <TarjetaTodo key={index} list={todo}/>
			    //    <Item key={index} item={todo} numberColor={index}/>
				
			  )})
		   }
		</Box>
	);
};

export default TodoContainer;
