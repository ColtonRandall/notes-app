package com.example.notesapp;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class NoteService {
    /*
        TODO: Create NoteRepository to interact
         with a database or in-memory storage. Move this
         list to the repository and use it to manage notes.
     */
    private final List<Note> notes = new ArrayList<>();

     public List<Note> getAllNotes() {
         return notes;
     }

     public Note getNoteById(String id) {
         return notes.stream()
                 .filter(note -> note.getId().equals(id))
                 .findFirst()
                 .orElse(null); // Return null if not found
     }

     public Note createNote(Note note) {
         // Generate a unique ID for the note
         String id = UUID.randomUUID().toString();
         // Create a new note with the provided title and content
         Note newNote = new Note(note.getTitle(), note.getContent(), id);
         // Add the new note to the list
         notes.add(newNote);
         System.out.println("Note created: " + newNote.getId());
         return newNote;
     }

        public String deleteNote(String id) {
            notes.removeIf(n -> n.getId().equals(id));
            return "Note with ID " + id + " deleted successfully.";
        }
}
