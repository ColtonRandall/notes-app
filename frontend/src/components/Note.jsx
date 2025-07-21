import { useState } from "react";
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
      <p className="noteDate">{new Date(note.timeStamp).toLocaleString()}</p>
      <h2 className="note-title">{note.title}</h2>
      <p className="note-content">{note.content}</p>
      <textarea
        className="update-note-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="saveButton" onClick={handleUpdate}>
        Save
      </button>
    </li>
  ) : (
    <li key={note.id} className="note">
      <p className="noteDate">{new Date(note.timeStamp).toLocaleString()}</p>
      <h2 className="note-title">{note.title}</h2>
      <p className="note-content">{content}</p>
      <div className="noteButtons">
        <button className="deleteButton" onClick={deleteNote}>
          Delete
        </button>
        <button className="updateButton" onClick={() => setIsUpdating(true)}>
          Update
        </button>
      </div>
    </li>
  );
}

export default Note;
