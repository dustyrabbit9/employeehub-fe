import React from "react";
import { Box } from "@mui/material";

const employees = () => {
  return (
    <Box
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      bgcolor={"skyBlue"}
      flex={5}
      p={2}
    >
      EMPLOYEES
    </Box>
  );
};

export default employees;
