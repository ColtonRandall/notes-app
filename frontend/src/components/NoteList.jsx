import Note from "./Note";
import "../styles/noteList.css";

function NotesList({ notes, setNotes }) {
  function handleDelete(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <ul className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default NotesList;
