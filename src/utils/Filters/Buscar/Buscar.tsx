import { Box, Button, TextField } from '@mui/material';
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import React,{useState} from 'react';
import { ImSortAmountAsc, ImSortAmountDesc } from 'react-icons/im';
export interface BuscarInterface {
	filtroAlfabetico:()=>void;
	handleSearch:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Buscar : React.FC<BuscarInterface> = ({filtroAlfabetico,handleSearch}) => {
	const [ascendente, setAscendente] = useState<boolean>(true);
	return(  
	<Box
	sx={{
	  display: "flex",
	  justifyContent: "center",
	  alignItems: "center",
	}}
  >
	<PersonSearchIcon  fontSize="large" sx={{ marginTop: "1rem" }} />
	<TextField
	  id="outlined-basic"
	  label="Buscar"
	  variant="outlined"
	  size="small"
	  onChange={handleSearch}
	  sx={{ marginTop: "1rem" }}
	/>
   
	{ascendente ? (
	  <Box
		component={Button}
		sx={{
		  marginTop: "1rem",
		  marginLeft: "1rem",
		  border: "1px solid #cccccc",
		  padding: "0.5rem",
		}}
		onClick={() => filtroAlfabetico()}
	  >
		<ImSortAmountAsc size={22} />
	  </Box>
	) : (
	  <Box
		component={Button}
		sx={{
		  marginTop: "1rem",
		  marginLeft: "1rem",
		  border: "1px solid #cccccc",
		  padding: "0.5rem",
		}}
		onClick={() => filtroAlfabetico()}
	  >
		<ImSortAmountDesc size={22} />
	  </Box>
	)}



  </Box>
  );
  }

export default Buscar;
