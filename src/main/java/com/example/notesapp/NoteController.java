package com.example.notesapp;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class NoteController {

    public NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/notes")
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @GetMapping("/notes/{id}")
    public Note getNoteById(@PathVariable String id){
        return noteService.getNoteById(id);
    }

     @PostMapping("/notes")
     public Note createNote(@RequestBody Note note) {
         return noteService.createNote(note);
     }

    @DeleteMapping("/notes/{id}")
    public String deleteNote(@PathVariable String id) {
        return noteService.deleteNote(id);
    }
}