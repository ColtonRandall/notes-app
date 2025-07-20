import { useEffect, useState } from "react";
import "../styles/note.css";

function Note({ note, onDelete, onUpdate }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [content, setContent] = useState(note.content);

  function handleUpdate() {
    const updated = { ...note, content };
    onUpdate(updated);
    setIsUpdating(false);
  }

  function deleteNote() {
    fetch(`/api/notes/${note.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not delete note");
        return response.text();
      })
      .then((message) => {
        console.log(message);
        onDelete(note.id);
      })
      .catch((error) => console.error(error));
  }

  return isUpdating ? (
    <li key={note.id} className="note">
      <h2 className="note-title">{note.title}</h2>
      <button onClick={deleteNote}>x</button>
      <p className="note-content">{note.content}</p>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleUpdate}>Save</button>
    </li>
  ) : (
    <li key={note.id} className="note">
      <h2 className="note-title">{note.title}</h2>
      <button onClick={deleteNote}>x</button>
      <p className="note-content">{content}</p>
      <button onClick={() => setIsUpdating(true)}>update note</button>
    </li>
  );
}

export default Note;
