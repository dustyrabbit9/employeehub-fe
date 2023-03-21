import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

// DataGrid Departments columns
const columns = [
  {
    field: "departmentName",
    headerName: "Department Name",
    minWidth: 10,
    flex: 0.2,
  },
  {
    field: "id",
    headerName: "Department ID",
    minWidth: 10,
    flex: 0.5,
  },
 
];

const Departments = () => {
  // Rows state
  const [rows, setRows] = useState([]);

  // GET All Departments 
  useEffect(() => {
    axios
      .get(
        "https://localhost:7113/api/EmployeeHub/department/getAllDepartments"
      )
      .then((response) => {
        setRows(response.data);
      });
  }, []);

  return (
    <Box flex={5} p={2}>
      <Box flex={5} p={2}>
        <Typography variant="h9" gutterBottom sx={{ fontStyle: "italic" }}>
          Table View{" "}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Departments List{" "}
        </Typography>
      </Box>
      <Paper elevation={2}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight={true}
        />
      </Paper>
    </Box>
  );
};

export default Departments;
