import { Box, Button, TextField,Dialog } from '@mui/material';
import React,{useState} from 'react';
import { Cliente, Usuario } from '../../../../../../models/interfaces/persona';
import { styles as classes} from '../../../../../VentanaLogue/styles/styles';
import crud from '../../../../../../models/prueba/crud.json';
import { add } from '../../../../../../models/prueba/cliente';
export interface EditTarjetaClienteInterface {
    cliente?:Cliente;
	tipo:string;
	onClose:()=>void;

}

const EditTarjetaCliente : React.FC<EditTarjetaClienteInterface> = ({cliente,tipo,onClose}) => {
    const [datos, setDatos] = useState<string[]>([])
	const handlerNuevo=()=>{
       add(
		{
		         
		nombre:'Carlo',
        apellido:'Alberto',
        direccion:'montevideo 145590',
        email:'santosdfzzi@gmail.com',
        dni:'30563545006',
        telefono:'29152204590',
        ingreso:new Date('1/2/2023') 
		 }
		 ).then(res=>console.log(res)
		 )		
	}

	return (
	    <Box sx={{
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			flexDirection:'column',
			gap:'0.5rem',
			padding:'2rem'
		}}>	
			
			<TextField  id='outlined-basic' defaultValue={(tipo==='editar')?cliente?.nombre:''} size='small' label='Nombre'/>
			<TextField  id='outlined-basic' defaultValue={(tipo==='editar')?cliente?.apellido:''} size='small' label='Apellido'/>
			<TextField  id='outlined-basic' defaultValue={(tipo==='editar')?cliente?.direccion:''} size='small' label='Domicilio'/>
			<TextField  id='outlined-basic' defaultValue={(tipo==='editar')?cliente?.telefono:''} size='small' label='Teléfono'/>
			<TextField  id='outlined-basic' defaultValue={(tipo==='editar')?cliente?.email:''} size='small' label='Email'/>
			<TextField  id='outlined-basic' defaultValue={(tipo==='editar')?cliente?.dni:''} size='small' label='DNI'/>
			<Box sx={{
			display:'flex',
			justifyContent:'space-between',
			alignItems:'center',
			width:'100%',
			}}>
				<Button onClick={()=>onClose()} sx={{color:'white',backgroundColor:'#4497FC',width:'6rem',"&:hover":{backgroundColor:'gray',color:'black'}}}>Cancelar</Button>
				
				{(tipo==='editar')
					?<Button sx={{color:'white',backgroundColor:'#EF9C07',width:'6rem',"&:hover":{backgroundColor:'gray',color:'black'}}}>Editar</Button>
				    :<Button onClick={()=>handlerNuevo()} sx={{color:'white',backgroundColor:'#059862',width:'6rem',"&:hover":{backgroundColor:'gray',color:'black'}}}>Nuevo</Button>
				}
			</Box>
		

		</Box>
	);
};

export default EditTarjetaCliente;
