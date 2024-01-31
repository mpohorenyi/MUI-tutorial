import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

const classes = {
  root: {
    display: "flex",
  },
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: 240,
  },
};

export const Layout = ({ children }) => {
  return (
    <Box sx={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        sx={classes.drawer}
        variant="permanent"
        anchor="left"
        PaperProps={{ sx: classes.drawer }}
      >
        <Typography variant="h5">
          Menu
        </Typography>
      </Drawer>

      <Box sx={classes.page}>
        {children}
      </Box>
    </Box>
  );
};