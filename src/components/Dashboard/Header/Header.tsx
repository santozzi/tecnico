import { Box } from "@mui/material";
import React from "react";
import {styles as classes} from './styles/styles';
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";

export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <Box component='header' sx={classes().container}>
        <Banner />
        <NavBar />
    </Box>
  );
};

export default Header;
