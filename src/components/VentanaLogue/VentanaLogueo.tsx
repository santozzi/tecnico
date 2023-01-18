import { Box, Dialog, Button, TextField } from "@mui/material";
import { styles as classes } from "./styles/styles";
import logoUns from "./images/uns_top_left.png";
import React,{useState} from 'react';
export interface VentanaLogueInterface {}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  funcion:any;
}

function VentanaLogueo(props: SimpleDialogProps) {
  const { onClose, selectedValue, open,funcion } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  const activar = ()=>{
    funcion(true);
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={classes().container}>
        <Box component="img" src={logoUns} sx={classes().logo} />
        <Box sx={classes().containerForm}>
          <Box sx={classes().titulo}>cems it</Box>

          <TextField id="standard-basic" label="Usuario" variant="standard" />

          <TextField
            id="standard-basic"
            label="Clave"
            variant="standard"
            type={"password"}
          />
        </Box>

        <Button sx={classes().button} onClick={()=>activar()}>Ingresar</Button>

        <Box sx={classes().forgot}>Olvide mi clave</Box>
      </Box>
    </Dialog>
  );
}

export default VentanaLogueo;
