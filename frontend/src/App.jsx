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
      <h1
        style={{ margin: "auto", textAlign: "center", paddingBottom: "5rem" }}
      >
        Notes
      </h1>
      <ul>
        {notes.map((note) => (
          <div
            key={note.id}
            style={{
              background: "orange",
              padding: "1rem",
              marginBottom: "5rem",
              borderRadius: "25px",
              marginBottom: "5rem",
              width: "50%",
              textAlign: "center",
            }}
          >
            <h2 style={{ margin: "auto", color: "black", textAlign: "center" }}>
              {note.title}
            </h2>
            <p style={{ fontWeight: "500" }}>{note.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
