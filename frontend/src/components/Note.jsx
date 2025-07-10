import "../styles/note.css";

function Note({ note }) {
  return (
    <li key={note.id} className="note">
      <h2 className="note-title">{note.title}</h2>
      <p className="note-content">{note.content}</p>
    </li>
  );
}

export default Note;
