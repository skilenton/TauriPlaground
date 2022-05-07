import "./App.css";
import { Box, Paper, Button, Typography, Grow } from "@mui/material";
import { TitleBar } from "./shared/TitleBar";
import { useState } from "react";

function App() {
  let [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Paper
      sx={{ minHeight: "inherit", boxSizing: "border-box" }}
      variant="outlined"
    >
      <TitleBar />
      <Box
        minHeight="calc( 100vh - 45px )"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grow in={isOpen}>
          <Typography variant="h1" fontWeight="bold">
            TANGINA MO
          </Typography>
        </Grow>
        <Button onClick={handleClick}>
          {isOpen ? "HAHA BOBO" : "CLICK ME!"}
        </Button>
      </Box>
    </Paper>
  );
}

export default App;
