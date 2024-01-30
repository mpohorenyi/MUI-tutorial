import React from "react";
import { Button, Container, Typography } from "@mui/material";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h1"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button 
        type="submit" 
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
