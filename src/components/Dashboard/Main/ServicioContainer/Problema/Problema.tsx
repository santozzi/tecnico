import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { IProblema } from '../../../../../models/interfaces/servicio';
import FilterProblema from '../../../../../utils/Filters/FilterProblema/FilterProblema';
export interface ProblemaInterface {
	problemas:IProblema[];
	problemaSeleccionado:(problema:IProblema)=>void;
	manejadorDeProblemas: (articulos: IProblema[]) => void;
}

const Problema : React.FC<ProblemaInterface> = ({manejadorDeProblemas,problemas,problemaSeleccionado}) => {
	const controladorProblema=(problema:IProblema)=>{
        problema.estado=false;
        problemaSeleccionado(problema);
		
	}
    
	
	return (
		<Box sx={{
			display:'flex',
			alignItems:'center',
			justifyContent:'space-between',
			flexDirection:'column',
			width:'20rem',
			height:'50rem'
		}}>
		   <FilterProblema 
		        problemas={problemas}
				manejadorDeProblemas={manejadorDeProblemas}
			/>
		   <Box>
           {problemas.map((problema:IProblema,index)=>problema.estado&&<Box component={Button} onClick={()=>controladorProblema(problema)} sx={{width:'100%'}} key={index}>{problema.nombre}</Box>)}
		    
		   </Box>
		   <Box sx={{		
			display:'flex',
			alignItems:'center',
			justifyContent:'space-around',
			width:'100%'}}>
			 <Box component={Button} onClick={()=>{}} sx={{borderRadius:0,color:'white',backgroundColor:'var(--primary)'}}>Cancelar</Box>
			 <Box component={Button} onClick={()=>{}} sx={{borderRadius:0,color:'white',backgroundColor:'green'}}>Nuevo</Box>
		   </Box> 
		</Box>
	);
};

export default Problema;
