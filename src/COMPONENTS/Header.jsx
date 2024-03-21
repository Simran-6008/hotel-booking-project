import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "../CSS/header.css"

const Header = () => {
  return (
    <>
    <div className="header-container">
      <Box sx={{ flexGrow: 1, }}>
        <AppBar className="nav-bar" position="static" >
          <Toolbar>
            <Typography  variant="h5" component="div" sx={{ flexGrow: 1,}}>
            Hotels In Manali Himachal Pradesh
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
    </>
  );
};

export default Header;
