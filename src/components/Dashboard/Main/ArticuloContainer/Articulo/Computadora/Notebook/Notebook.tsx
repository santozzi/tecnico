import Box from '@mui/material/Box';
import React from 'react';
import { INotebook } from '../../../../../../../models/interfaces/articulo';
import Computadora from '../Computadora';
export interface NotebookInterface {
	articulo:INotebook;
}

const Notebook : React.FC<NotebookInterface> = ({articulo}) => {
	return (
		<Box>
		<Computadora
		  so={articulo.SO || ""}
		  claves={articulo.claves || []}
		  informe={articulo.informe}
		/>
  
	
	  </Box>
	);
};

export default Notebook;
