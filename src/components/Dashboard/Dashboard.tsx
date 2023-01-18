import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { styles as classes } from "./styles/styles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Router from "../../routes/Router/Router";

export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box sx={classes().containerBase}>
      <Box sx={{ ...classes().container, width: !matches ? "100%" : "1000px" }}>
        <Box sx={classes().containerFrame}>
          <Header />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              minHeight: "100vh",
              position: "relative",
            }}
          >
            <Router />
            <Box sx={{ paddingBottom: "15rem" }}></Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
