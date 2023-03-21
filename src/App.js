import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import EditEmployees from "./pages/EditEmployees";
import Departments from "./pages/Departments";
import EditDepartments from "./pages/EditDepartments";

function App() {
  return (
    <Box>
      <Navbar />

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/EditEmployees" element={<EditEmployees />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/EditDepartments" element={<EditDepartments />} />
        </Routes>
      </Stack>
    </Box>
  );
}

export default App;
