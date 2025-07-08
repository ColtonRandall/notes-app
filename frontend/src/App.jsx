import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error loading notes:", error));
  }, []); // Fetch notes from the API when the component mounts

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
