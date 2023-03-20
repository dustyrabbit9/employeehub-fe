import {
  Box,
  Button,
  Paper,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditEmployees = () => {
  // Employee state
  const [rows, setEmployees] = useState([]);

  const [newDate, setNewDate] = useState([]);
  // Department state
  const [departments, setDepartments] = useState([]);

  // Edit Modal state
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  // Add Modal state
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  // Add form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  // Edit form state
  const [editId, setEditId] = useState("");
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editDob, setEditDob] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editSalary, setEditSalary] = useState("");
  const [editDepartmentName, setEditDepartmentName] = useState("");

  // GET All Employees
  const getAllEmployees = () => {
    axios
      .get("https://localhost:7113/api/EmployeeHub/employee/getAllEmployees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // GET All Departments
  const getAllDepartments = () => {
    axios
      .get(
        "https://localhost:7113/api/EmployeeHub/department/getAllDepartments"
      )
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllEmployees();
    getAllDepartments();
  }, []);

  const [data, setData] = useState([]);

  const handleEdit = (id) => {
    handleOpenEdit();
    axios
      .get(
        `https://localhost:7113/api/EmployeeHub/employee/getOneEmployee/${id}`
      )
      .then((response) => {
        setEditFirstName(response.data.firstName);
        setEditLastName(response.data.lastName);
        setEditDob(response.data.dob);
        setEditEmail(response.data.email);
        setEditSalary(response.data.salary);
        setEditDepartmentName(response.data.departmentName);
        setEditId(id);

        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getDepartmentName = (id) => {
    handleOpenEdit();
    axios
      .get(
        `https://localhost:7113/api/EmployeeHub/department/getOneDepartment/${id}`
      )
      .then((response) => {
        setDepartmentName(response.data.departmentName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete the Employee record?") ==
      true
    ) {
      axios
        .delete(
          `https://localhost:7113/api/EmployeeHub/employee/deleteEmployee/${id}`
        )
        .then((result) => {
          if (result.status === 200) {
            alert("Employee has been deleted");
            getAllEmployees();
          }
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7113/api/EmployeeHub/employee/updateEmployee/${editId}`;
    const data = {
      firstName: editFirstName,
      lastName: editLastName,
      email: editEmail,
      salary: editSalary,
      dob: editDob,
      departmentName: editDepartmentName,
    };

    axios.put(url, data).then((result) => {
      getAllEmployees();
      handleCloseEdit();
    });
  };

  const handleAdd = () => {
    const url = "https://localhost:7113/api/EmployeeHub/employee/addEmployee";
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      salary: salary,
      dob: dob,
      departmentName: departmentName,
    };

    axios
      .post(url, data)
      .then((result) => {
        getAllEmployees();
        handleCloseAdd();
      })
      .catch((error) => {
        if (error) {
          alert(error.response.data.errors); 
        }
      });
  };

  const pattern = /^[a-zA-Z]+$/; 

  return (
    <Box flex={5} p={2}>
      <Box flex={5} p={2}>
        <Typography variant="h9" gutterBottom sx={{ fontStyle: "italic" }}>
          Edit Table{" "}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Employees List{" "}
        </Typography>
        <Button
          variant="contained"
          sx={{position: "fixed", right: 35, top: 115}}
          startIcon={<AddIcon />}
          onClick={handleOpenAdd}
        >
          Add Employee
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="1%">ID</TableCell>
              <TableCell width="5%">First Name</TableCell>
              <TableCell width="5%">Last Name </TableCell>
              <TableCell width="5%">DOB</TableCell>
              <TableCell width="1%">Age</TableCell>
              <TableCell width="5%">Email</TableCell>
              <TableCell width="5%">Salary</TableCell>
              <TableCell width="5%">Department</TableCell>
              <TableCell width="10%" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.departmentName}</TableCell>
                <TableCell colSpan={1} align="right">
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    size="small"
                    onClick={() => handleEdit(row.id)}
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    sx={{ bgcolor: "#ed4856" }}
                    variant="contained"
                    endIcon={<DeleteIcon />}
                    size="small"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", marginBottom: 4 }}
          >
            Edit Employee{" "}
          </Typography>
          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="Department"
            helperText="Please select Department"
            value={editDepartmentName}
            sx={{ marginBottom: 3 }}
            onChange={(e) => setEditDepartmentName(e.target.value)}
          >
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.departmentName}>
                {department.departmentName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            onChange={(e) => setEditFirstName(e.target.value)}
            fullWidth
            id="outlined-helperText"
            label="First Name"
            value={editFirstName}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            onChange={(e) => setEditLastName(e.target.value)}
            fullWidth
            id="outlined-helperText"
            label="Last Name"
            value={editLastName}
            sx={{ marginBottom: 4 }}
          />
          <TextField
            onChange={(e) => setEditDob(e.target.value)}
            fullWidth
            id="outlined-helperText"
            label="DOB"
            helperText="YYYY-MM-DD"
            value={editDob}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            onChange={(e) => setEditEmail(e.target.value)}
            fullWidth
            id="outlined-helperText"
            label="Email"
            value={editEmail}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            onChange={(e) => setEditSalary(e.target.value)}
            fullWidth
            id="outlined-helperText"
            label="Salary"
            helperText="Enter numerical value with no spaces"
            value={editSalary}
            sx={{ marginBottom: 3 }}
            type="number"
          />

          <Stack>
            <Button
              sx={{ bgcolor: "#ed4856" }}
              variant="contained"
              onClick={handleCloseEdit}
            >
              Cancel
            </Button>
            &nbsp;
            <Button
              startIcon={<EditIcon />}
              variant="contained"
              onClick={(e) => handleUpdate(e)}
            >
              Edit Employee{" "}
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", marginBottom: 4 }}
          >
            Add Employee{" "}
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-select-currency"
            select
            label="Department"
            helperText="Please select Department"
            sx={{ marginBottom: 3 }}
            onChange={(e) => setDepartmentName(e.target.value)}
          >
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.departmentName}>
                {department.departmentName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            id="outlined-helperText"
            label="First Name"
            sx={{ marginBottom: 3 }}
            inputProps={{ pattern: pattern }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Last Name"
            sx={{ marginBottom: 4 }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="DOB"
            helperText="YYYY-MM-DD"
            sx={{ marginBottom: 3 }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Email"
            sx={{ marginBottom: 3 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Salary"
            helperText="Enter numerical value with no spaces"
            sx={{ marginBottom: 3 }}
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />

          <Stack>
            <Button
              sx={{ bgcolor: "#ed4856" }}
              variant="contained"
              onClick={handleCloseAdd}
            >
              Cancel
            </Button>
            &nbsp;
            <Button
              startIcon={<EditIcon />}
              variant="contained"
              onClick={(e) => handleAdd(e)}
            >
              Add Employee{" "}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default EditEmployees;
