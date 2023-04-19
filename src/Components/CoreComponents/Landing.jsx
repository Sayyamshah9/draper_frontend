import React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const Landing = () => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ marginTop: "5rem" }}>
        <h1>Landing Page</h1>
      </Box>
    </>
  );
};

export default Landing;
