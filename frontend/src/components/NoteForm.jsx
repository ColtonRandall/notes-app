import { useState } from "react";
import "../styles/noteForm.css";

function NoteForm({ setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => response.json())
      .then((newNote) => {
        setNotes((previousState) => [newNote, ...previousState]);
        setTitle("");
        setContent("");
      })
      .catch((error) => console.error("Failed to create note", error));
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="noteform-title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="noteform-content"
      ></textarea>
      <button
        type="submit"
        className="note-submit"
        style={{ background: "#77DD77" }}
      >
        Create Note
      </button>
    </form>
  );
}

export default NoteForm;
