package com.example.notesapp;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class NoteController {

    private final List<Note> notes = new ArrayList<>();

    // This class will handle HTTP requests related to notes
    // For example, it can have methods to create, read, update, and delete notes
    // Each method can be annotated with @GetMapping, @PostMapping, etc. to map to specific endpoints

//TODO: Uncomment when service is implemented
//     @GetMapping("/notes")
//     public List<Note> getAllNotes() {
//         return noteService.getAllNotes();
//     }
    @GetMapping("/notes")
    public List<Note> getAllNotes() {
        return notes;
    }

    @GetMapping("/notes/{id}")
    public Note getNoteById(@PathVariable String id){
        // Find the note by ID
        return notes.stream()
                .filter(note -> note.getId().equals(id))
                .findFirst()
                .orElse(null); // Return null if not found

    }

//TODO: Uncomment when service is implemented
//     @PostMapping("/notes")
//     public Note createNote(@RequestBody Note note) {
//         return noteService.createNote(note);
//     }
    @PostMapping("/notes")
    public Note createNote(@RequestBody Note note) {
        // generate a unique ID for the note
        String id = UUID.randomUUID().toString();
        // Generate a new note
        Note newNote = new Note(note.getTitle(), note.getContent(), id);
        // Add the new note to the list
        notes.add(newNote);
        System.out.println("Note created: " + newNote.getId());
        return newNote;
    }

    @DeleteMapping("/notes/{id}")
    public String deleteNote(@PathVariable String id) {
        // Find the note by ID and remove it from the list
        notes.removeIf(n -> n.getId().equals(id));
        return "Note with ID " + id + " deleted successfully.";
    }


}