import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { localClient } from "../localClient";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todos");

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDetailsError, setIsDetailsError] = useState(false);

  const classes = {
    field: {
      my: 2,
      display: "block",
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsTitleError(!title);
    setIsDetailsError(!details);

    if (!title || !details) {
      return;
    }

    localClient.add("notes", { title, details, category });

    setTitle("");
    setDetails("");
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
          sx={classes.field}
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
          sx={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={isDetailsError}
        />

        <FormControl sx={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="remainders"
              control={<Radio />}
              label="Remainders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

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
