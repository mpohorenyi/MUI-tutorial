import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Create() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDetailsError, setIsDetailsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsTitleError(!title);
    setIsDetailsError(!details);

    if (!title || !details) {
      return;
    }

    console.log(title, details);

    setTitle('');
    setDetails('');
  };

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          sx={{
            my: 2,
            display: "block",
          }}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={isTitleError}
        />

        <TextField
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          sx={{
            my: 2,
            display: "block",
          }}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={isDetailsError}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
