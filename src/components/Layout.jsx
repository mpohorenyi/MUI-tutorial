import { Box } from "@mui/material";
import React from "react";

const classes = {
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
};

export const Layout = ({ children }) => {
  return (
    <Box>
      {/* app bar */}

      {/* side drawer */}

      <Box sx={classes.page}>
        {children}
      </Box>
    </Box>
  );
};