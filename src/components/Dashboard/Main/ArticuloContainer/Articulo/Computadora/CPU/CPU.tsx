import React, { useState } from "react";
import { ICPU } from "../../../../../../../models/interfaces/articulo";
import { Box } from "@mui/material";
import Computadora from "../Computadora";

export interface CPUInterface {
  articulo: ICPU;
}

const CPU: React.FC<CPUInterface> = ({ articulo }) => {
  const [tipoMap, setTipoMap] = useState<Map<string, any>>(new Map());
  return (
    <Box>
      <Computadora
        so={articulo.SO || ""}
        claves={articulo.claves || []}
        informe={articulo.informe}
      />

  
    </Box>
  );
};

export default CPU;
