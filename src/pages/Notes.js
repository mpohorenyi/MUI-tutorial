import React, { useState } from "react";
import { localClient } from "../localClient";

export default function Notes() {
  const [notes, setNotes] = useState(localClient.init("notes", []));

  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
}
