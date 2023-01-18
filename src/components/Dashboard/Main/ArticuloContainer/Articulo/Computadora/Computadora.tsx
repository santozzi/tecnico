import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { IClave, IComputadora } from "../../../../../../models/interfaces/articulo";
import CPU from "./CPU/CPU";
import Notebook from "./Notebook/Notebook";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import PasswordIcon from "@mui/icons-material/Password";
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import Clave from "./Clave/Clave";
import Wifi from "./Clave/Wifi/Wifi";
import StartSystem from "./Clave/StartSystem/StartSystem";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
export interface ComputadoraInterface {
  computadora?: IComputadora;
  so: string;
  informe?:string;
  claves:IClave[];
}

const Computadora: React.FC<ComputadoraInterface> = ({
  computadora,
  so,
  claves,
  informe
}) => {
  const [tipoMap, setTipoMap] = useState<Map<string, any>>(new Map());
  const [isClaves, setIsClaves] = useState(false);
  const [passwords, setPasswords]=  useState<IClave[]>([]);
  const [clave, setClave]=  useState<IClave>({tipo:"Wifi",clave:'',titulo:''});
  const getClaves=
  useEffect(() => {
	 console.log(claves.length);
	// setTipoMap(f => f.set("Wifi", <Wifi clave={clave} key={clave.titulo}/>));
	// setTipoMap(f => f.set("Start", <StartSystem clave={clave} key={clave.titulo}/>));
	 
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "0.5rem",
        }}
      >
        <BlurCircularIcon />
        <Box>{so}</Box>
      </Box>
	  <Box   sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "0.5rem",
        }}>
		<AssessmentOutlinedIcon />
		<Box component='a' href={informe} target='_blank'>Informe</Box>
	  </Box>
	  
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "0.5rem",
        }}
      >
        <PasswordIcon />
        <Button
         
          onClick={() => setIsClaves((f) => !f)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
            margin: 0,
            padding: 0,
          }}
        >
          claves
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 0.5rem",
              borderRadius: "20px",
              fontSize: "0.8rem",
              backgroundColor: claves.length > 0 ? "red" : "#cccccc",
              color: claves.length > 0 ? "white" : "#222222",
            }}
          >
            {claves.length}
          </Box>
		
        </Button>
		
      </Box>
	   {
			(isClaves)&&
			<Box
			sx={{
			  display: "flex",
			  alignItems: "flex-start",
			  justifyContent: "center",
			  flexDirection:'column',
			  gap: "1rem",
			  margin:"-0.1rem 1rem"
			}}
		  >
			{
			claves.map((clave:IClave,index)=>{
	            
				return <Clave clave={clave} key={index}/>
			}
				
			
				
			)
			}
			
		  </Box>
		  }
    </Box>
  );
};

export default Computadora;
