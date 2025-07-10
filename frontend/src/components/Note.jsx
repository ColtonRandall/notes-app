import "../styles/note.css";

function Note({ note, onDelete }) {
  function handleDelete() {
    fetch(`http://localhost:8080/api/notes/${note.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not delete note");
        return response.text(); // endpoint currently returns a string
      })
      .then((message) => {
        console.log(message);
        onDelete(note.id);
      })
      .catch((error) => console.error(error));
  }

  return (
    <li key={note.id} className="note">
      <h2 className="note-title">{note.title}</h2>
      <button onClick={handleDelete}>x</button>
      <p className="note-content">{note.content}</p>
    </li>
  );
}

export default Note;
