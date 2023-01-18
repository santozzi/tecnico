import React from 'react';
import Box from '@mui/material/Box';
export interface FooterInterface {}

const Footer : React.FC<FooterInterface> = () => {
	return (
		<Box sx={{
			backgroundColor:'var(--primary)',
		    width:'100%',
			minHeight:'15rem',
			position:'absolute',
			bottom:0,
			
	
		}}>footer</Box>
	);
	}
export default Footer;
