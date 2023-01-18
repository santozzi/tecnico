import { AddBox } from "@mui/icons-material";
import { NavLink } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Container, Menu, MenuItem, Tooltip } from "@mui/material";
import {  styled } from '@mui/material';
export interface NavBarInterface {}
interface UrlName {
  url:string;
  nombre:string;
}
const pages:UrlName[] = [
        {nombre:'Usuario',url:'/usuario'}, 
        {nombre:'Cliente',url:'/cliente'}, 
        {nombre:'Articulo',url:'/articulo'},
        {nombre:'Servicio',url:'/servicio'},
        {nombre:'TODO',url:'/todo'},
        {nombre:'Reportes',url:'/'}
      ];
const settings = ['Perfil', 'Cerrar sesión'];
const NavBar: React.FC<NavBarInterface> = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 
  const link = {
    
    "&:link": {
      color:'#000000',
      textDecoration:'none'
    },
    "&:visited": {
      color:'#000000',
      
    },
  
  };


  return (
    <AppBar position="static" >
    <Container maxWidth="xl">
      <Toolbar disableGutters>


        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page,index) => (
              <Box component={Link}  to={page.url} sx={  link} key={index+"linkmenu"}>
              <MenuItem key={index+"menu"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page.nombre}</Typography>
              </MenuItem>
              </Box>
            ))}
          </Menu>
        </Box>
     <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
      
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page,index) => (
            <Button
              component={NavLink}  
            key={index}
              
              to={page.url}
              sx={{ padding: 2, color: 'white', display: 'block' }}
              onClick={handleCloseNavMenu}
            >
              {page.nombre}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Sergio Antozzi" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  );
};

export default NavBar;
