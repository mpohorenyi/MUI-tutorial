import React from "react";
import { Button, Container, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
        color="primary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
