import { Box } from "@mui/material";
import React from "react";

const home = () => {
  return (
    <Box
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      bgcolor={"skyBlue"}
      flex={5}
      p={2}
    >
      HOME
    </Box>
  );
};

export default home;
