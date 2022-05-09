import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Home from "../Home/Home";
import About from "../About/About";

function Main() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Box display="flex" justifyContent="flex-start" width="90%">
              <Box width="100px">
                <Link to="/">
                  <Typography variant="h6" component="div" color="white">
                    Home
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1 }} width="100px">
                <Link to="/about">
                  <Typography
                    variant="h6"
                    component="div"
                    color="white"
                    sx={{ flexGrow: 1 }}
                  >
                    About
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
