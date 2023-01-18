import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import { IWifi } from "../../../../../../../../models/interfaces/articulo";
import { ClaveInterface, WifiInterface } from "../Clave";

const Wifi: React.FC<WifiInterface> = ({ claveW }) => {
  const [isWifiActive, setIsWifiActive] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
       // margin: "-0.5rem 1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box  sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
		  gap:'0.5rem'
         
        }}>
          <WifiPasswordIcon fontSize="small" />
          <Button
            onClick={() => setIsWifiActive((f) => !f)}
            sx={{
              fontSize: "0.8rem",
              margin: 0,
              padding: 0,
            }}
          >
            {claveW?.titulo}
          </Button>
        </Box>

        {isWifiActive && (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              
            }}
          >
            <Box>{`ssid: ${claveW?.ssid}`}</Box>
            <Box>{`clave: ${claveW?.clave}`}</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Wifi;
