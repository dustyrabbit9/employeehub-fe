import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { format } from "date-fns";

// DataGrid Employees columns
const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "dob",
    headerName: "DOB",
    valueFormatter: (params) => format(new Date(params.value), "yyyy-MM-dd"),
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 195,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column is not sortable.",
    sortable: false,
    width: 220,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 100,
  },
  {
    field: "departmentName",
    headerName: "Department",
    width: 200,
  },
];

const Employees = () => {
  // Rows state
  const [rows, setRows] = useState([]);

  // GET All Employees
  useEffect(() => {
    axios
      .get("https://localhost:7113/api/EmployeeHub/employee/getAllEmployees")
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
          Employees List{" "}
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

export default Employees;
