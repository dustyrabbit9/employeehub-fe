import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
