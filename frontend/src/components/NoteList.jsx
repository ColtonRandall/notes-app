import { Masonry } from "@mui/lab";
import { Card, CardContent, Typography } from "@mui/material";

function NoteList({ notes }) {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
      {notes.map((note) => (
        <Card
          key={note.id}
          sx={{
            borderRadius: 3,
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {note.title}
            </Typography>
            <Typography>{note.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Masonry>
  );
}

export default NoteList;
