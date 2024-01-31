import React from "react";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

export const NoteCard = ({ note, onDelete }) => {
  return (
    <Card elevation={2}>
      <CardHeader
        action={
          <IconButton onClick={() => onDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};
