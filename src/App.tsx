import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ThumbUp from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";
import { Router } from "@/router/Router";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
}

export default App;
