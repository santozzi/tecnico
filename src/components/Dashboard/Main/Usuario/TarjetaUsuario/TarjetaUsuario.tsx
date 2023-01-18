import { Button, Checkbox } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { User } from '../Usuario';
export interface TarjetaUsuarioInterface {
	user:User;
}

const TarjetaUsuario : React.FC<TarjetaUsuarioInterface> = ({user}) => {
	return (
		<Box sx={{
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			width:'15rem',
			margin:'0.5rem',
			padding:'2rem',
			border:'1px solid #cccccc',
		


		}}>
		<Box sx={{
			display:'flex',
			justifyContent:'center',
			alignItems:'flex-start',
			width:'100%',
			flexDirection:'column',
			gap:'0.5rem',
			
			



		}}>
			<Box sx={{display:'flex',
			justifyContent:'space-between',
			alignItems:'center',
			borderBottom:'1px solid #cccccc',
			paddingBottom:'1rem',
			width:'100%'
			}}>	
				<Box sx={{
			marginRight:'0.5rem',
			fontSize:'1.2rem'}}>{`${user.nombre} ${user.apellido}`}</Box>
			    <Box component='button' sx={{backgroundColor:'var(--warning)'}}><EditIcon /></Box>
				<Box component='button' sx={{backgroundColor:'var(--error)'}}><DeleteOutlineIcon/></Box>
			</Box>

			<Box sx={{
				display:'flex',
			    justifyContent:'center',
				alignItems:'center',
				gap:'1rem',
				paddingTop:'1rem'
				}}>
				<PhoneIcon/> 
				<Box>{user.telefono}</Box>
			</Box>
			<Box sx={{
				display:'flex',
			    justifyContent:'center',
				alignItems:'center',
				gap:'1rem'
				}}><PersonIcon /> <Box>{user.usurio}</Box></Box>
			<Box sx={{
				display:'flex',
			    justifyContent:'center',
				alignItems:'center',
				gap:'1rem'
				}}>
					<Box>Blanquear clave</Box>
					<Checkbox  />
			</Box>
		</Box>
		</Box>
	);
};

export default TarjetaUsuario;
