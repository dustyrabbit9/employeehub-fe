import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      bgcolor={"red"}
      flex={5}
      p={2}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
