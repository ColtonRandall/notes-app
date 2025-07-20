import Note from "./Note";
import "../styles/noteList.css";

function NotesList({ notes, setNotes }) {
  function handleDelete(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  async function updateNote(updatedNote) {
    try {
      const response = await fetch(`/api/notes/${updatedNote.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ content: updatedNote.content }),
      });

      if (!response.ok) throw new Error("Failed to update note");

      const updatedFromServer = await response.json();

      setNotes((previousNotes) =>
        previousNotes.map((note) =>
          note.id === updatedFromServer.id ? updatedFromServer : note
        )
      );
    } catch (error) {
      console.error("Updated failed: ", error);
    }
  }

  return (
    <ul className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onDelete={handleDelete}
          onUpdate={updateNote}
        />
      ))}
    </ul>
  );
}

export default NotesList;
