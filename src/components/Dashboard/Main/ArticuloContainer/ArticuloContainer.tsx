import React, { useEffect, useState } from "react";
import {Box} from '@mui/material';
import Articulo from "./Articulo/Articulo";
import { findAll } from "../../../../models/prueba/articulo.model";
import { IArticulo, IArticulo as Item} from "../../../../models/interfaces/articulo";
import FiltroArticulos from "../../../../utils/Filters/FitroArticulos/FiltroArticulos";
import Button from "@mui/material/Button";

export interface ArticuloContainerInterface {}

const ArticuloContainer: React.FC<ArticuloContainerInterface> = () => {
  const [articulos, setArticulos] = useState<Item[]>([])
   const deptoColor=(depto:string):string=>{
  
    switch(depto){
      case "ESC":{return('#2B67B7')}
      break;
      case "EAG":{return('#734928')}
      break;
      case "ENS":{return('#AA000A')}
      break;
      case "ECBC":{return('#E0BF1B')}
      break;
      case "EEIP":{return('#B8E885')}
      break;
       default:{return('#B8E885')}
      break;
     }
   }

   const manejadorArticulos=(articulos:IArticulo[])=>{
    setArticulos(articulos);
}
   useEffect(() => {
    findAll().then(art=>{
        setArticulos(art);
       
        
    })
 }, [])


  return (
    <Box>
    <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      height:'100%'
    }}>
    <FiltroArticulos articulos={articulos} manejadorDeArticulos={manejadorArticulos} />
    <Button>Agregar</Button>
    </Box>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap:'wrap'
        
      }}
    >
      
      {
        articulos.map((art:Item,index)=>{
         
             return <Articulo key={index} item={art}/>
        })
      }
      
     
    </Box>
    </Box>
  );
};

export default ArticuloContainer;
