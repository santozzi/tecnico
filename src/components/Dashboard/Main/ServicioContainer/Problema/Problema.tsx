import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { IProblema } from '../../../../../models/interfaces/servicio';
export interface ProblemaInterface {
	problemas:IProblema[];
	problemaSeleccionado:(problema:IProblema)=>void;
}

const Problema : React.FC<ProblemaInterface> = ({problemas,problemaSeleccionado}) => {
	const controladorProblema=(problema:IProblema)=>{
        problema.estado=false;
        problemaSeleccionado(problema);
	}

	
	return (
		<Box sx={{
			display:'flex',
			alignItems:'center',
			justifyContent:'center',
			flexDirection:'column'
		}}>
           {problemas.map((problema:IProblema,index)=>problema.estado&&<Box component={Button} onClick={()=>controladorProblema(problema)}>{problema.nombre}</Box>)}
		   {/* <Box>
			 <Box component={Button} onClick={()=>{}}>Cancelar</Box>
			 <Box component={Button} onClick={()=>{}}>Aceptar</Box>
		   </Box> */}
		</Box>
	);
};

export default Problema;
