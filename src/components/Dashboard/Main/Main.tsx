import React from 'react';
import { Box } from "@mui/material";
import { Router } from '@mui/icons-material';

const flex={
	width:'100%',
	display:'flex',
	justifyContent:'space-between',
	alignItems:'center',
	gap:'2rem'
	};


export interface MainInterface {}

const Main : React.FC<MainInterface> = () => {
	return (
		<Box sx={{flex}}>
			<Router /> 
		</Box>
	);
};

export default Main;
