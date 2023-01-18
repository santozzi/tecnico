import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TarjetaUsuario from "./TarjetaUsuario/TarjetaUsuario";
export interface UsuarioInterface {
  
}
export interface User {
  id: string;
  nombre: string;
  apellido: string;
  telefono: string;
  foto?: string;
  usurio: string;
  clave: string;
}
const usuario: User[] = [
  {
    id: "1",
    nombre: "Sergio",
    apellido: "Antozzi",
    usurio: "LaParka",
    clave: "1234",
    telefono: "1234546",
  },
  {
    id: "2",
    nombre: "Carlo",
    apellido: "Alberto",
    usurio: "CAlberto",
    clave: "1234",
    telefono: "123784546",
  },
  {
    id: "2",
    nombre: "Carlo",
    apellido: "Alberto",
    usurio: "CAlberto",
    clave: "1234",
    telefono: "123784546",
  },
  {
    id: "2",
    nombre: "Carlo",
    apellido: "Alberto",
    usurio: "CAlberto",
    clave: "1234",
    telefono: "123784546",
  },
  {
    id: "2",
    nombre: "Carlo",
    apellido: "Alberto",
    usurio: "CAlberto",
    clave: "1234",
    telefono: "123784546",
  },
  {
    id: "2",
    nombre: "Carlo",
    apellido: "Alberto",
    usurio: "CAlberto",
    clave: "1234",
    telefono: "123784546",
  },
  {
    id: "2",
    nombre: "Carlo",
    apellido: "Alberto",
    usurio: "CAlberto",
    clave: "1234",
    telefono: "123784546",
  },
];
const Usuario: React.FC<UsuarioInterface> = () => {
  const [usr, setUsr] = useState<User[]>([]);
  const buscar=(palabra:string)=>{
  const find = usr.find(word=>word.nombre===palabra || word.apellido===palabra);
	//setUsr(find);
	//let b = a.filter(item => item.toLowerCase().indexOf(term) > -1);
  }
  useEffect(() => {
    setUsr(usuario);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        border: "1px solid black",
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PersonSearchIcon fontSize="large" sx={{ marginTop: "1rem" }} />
        <TextField
          id="outlined-basic"
          label="Buscar"
          variant="outlined"
          size="small"
          sx={{ marginTop: "1rem" }}
        />
     
		<PersonAddIcon sx={{ marginTop: "1rem", marginLeft:'1rem' }} fontSize='large'/>
        <Box sx={{ marginTop: "1rem", marginLeft:'0.5rem' }}>Nuevo usuario</Box>
	  </Box>
	  <Box sx={{
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			width:'100%',
			flexWrap:'wrap'}}>
      {usr.map((usu: User, index) => {
        return <TarjetaUsuario key={index} user={usu}/>;
      })}
	  </Box>
    </Box>
  );
};

export default Usuario;
