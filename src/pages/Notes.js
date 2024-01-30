import React, { useState } from "react";
import { localClient } from "../localClient";
import { Container, Grid, Paper } from "@mui/material";

export default function Notes() {
  const [notes, setNotes] = useState(localClient.init("notes", []));

  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
