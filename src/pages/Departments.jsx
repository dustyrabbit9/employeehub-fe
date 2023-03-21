import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "departmentName",
    headerName: "Department Name",
    minWidth: 50,
    flex: 1,
  },
];

const Departments = () => {
  const [rows, setRows] = useState([]);

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
          autoWidth={true}
        />
      </Paper>
    </Box>
  );
};

export default Departments;
