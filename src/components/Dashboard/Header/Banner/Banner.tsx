import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import Logo from '../../../../images/uns_top_left.png';
import {styles as classes} from './styles/styles';

export interface BannerInterface {}

const Banner : React.FC<BannerInterface> = () => {
  const matches = useMediaQuery('(min-width:500px)');
  return (
		<Box sx={
      {...classes().container,
      flexWrap:(!matches)?'wrap':'nowrap'
      }}>
        <Box component="img" src={Logo} sx={classes().logo}/>
        <Box sx={classes().brand}> CEMS IT</Box>
      </Box>
	);
};

export default Banner;
