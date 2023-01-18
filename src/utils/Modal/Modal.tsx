import React from 'react';
import {Dialog } from '@mui/material';
export interface ModalInterface {
	open?:boolean;
	selectedValue?: string;
	onClose?: () => void;
	funcion?:any;
	//componente:React.ComponentType;
	children?: React.ReactNode | React.ReactNode[];

}

const Modal : React.FC<ModalInterface> = (props) => {
	const { onClose, selectedValue, funcion,open=false, children} = props;
	const handleClose = () => {
	  if(onClose!=undefined)
		 onClose();
	  };
  


	return (
	<Dialog onClose={handleClose} open={open}>
      
        {/* <Component /> */
		  children
		}
        
      
    </Dialog>
	);
};

export default Modal;