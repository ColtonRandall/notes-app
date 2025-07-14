import "./styles/app.css";
import NotesList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Failed to load notes", err));
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Notes</h1>
      <NoteForm setNotes={setNotes} />
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
