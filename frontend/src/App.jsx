import "./styles/app.css";
import NotesList from "./components/NoteList";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Notes</h1>
      <NotesList />
    </div>
  );
}

export default App;
