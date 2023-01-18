import React,{useState} from "react";
import { IStart } from "../../../../../../../../models/interfaces/articulo";
import { Box, Button } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { StartSystemInterface } from "../Clave";

const StartSystem: React.FC<StartSystemInterface> = ({ claveS }) => {
   const [isActive, setIsActive] = useState(false)
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.5rem",
        //margin: "-0.5rem 1rem",
      }}
    >
      <Box sx={{     
		display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
		flexDirection:'column'}}>
        <Box sx={{     
		display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
		flexDirection:'row',
		gap:'0.5rem'}}>
          <KeyIcon fontSize="small" />
          <Button onClick={()=>setIsActive(f=>!f)} sx={{margin:0,padding:0,fontSize:'0.8rem'}}>{claveS?.titulo}</Button>
        </Box>
		{
			isActive&&
			<Box sx={{     
				display: "flex",
				alignItems: "flex-start",
				justifyContent: "center",
				flexDirection:'column',
				margin:'-0.2rem 0'}}>
               <Box>{`usuario: ${claveS?.usuario}`}</Box>
               <Box>{`clave: ${claveS?.clave}`}</Box>
			</Box>
		}
      </Box>
    </Box>
  );
};

export default StartSystem;
