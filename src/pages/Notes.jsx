import React, { useState } from "react";
import { localClient } from "../localClient";
import { Container, Grid } from "@mui/material";
import { NoteCard } from "../components/NoteCard";

export const Notes = () => {
  const [notes, setNotes] = useState(localClient.init("notes", []));

  const handleDelete = (id) => {
    setNotes(prev => prev.filter(item => item.id !== id));
    localClient.delete("notes", id);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
            <NoteCard note={note} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
