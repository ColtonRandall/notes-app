import { useEffect, useState } from "react";
import Note from "./Note";
import "../styles/noteList.css";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error loading notes:", error));
  }, []);

  return (
    <ul className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
}

export default NotesList;
