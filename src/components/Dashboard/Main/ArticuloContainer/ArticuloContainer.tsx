import React, { useEffect, useState } from "react";
import {Box} from '@mui/material';
import Articulo from "./Articulo/Articulo";
import { findAll } from "../../../../models/prueba/articulo.model";
import { IArticulo, IArticulo as Item} from "../../../../models/interfaces/articulo";

export interface ArticuloContainerInterface {}

const ArticuloContainer: React.FC<ArticuloContainerInterface> = () => {
  const [articulos, setArticulos] = useState<Item[]>([])
   const deptoColor=(depto:string):string=>{
   const manejadorDeArticulos=(articulos:IArticulo[])=>{
       setArticulos(articulos);
   }
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


   useEffect(() => {
    findAll().then(art=>{
        setArticulos(art);
       
        
    })
 }, [])
  return (
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
  );
};

export default ArticuloContainer;
