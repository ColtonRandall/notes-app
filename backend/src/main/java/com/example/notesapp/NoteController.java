package com.example.notesapp;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PatchMapping("/notes/{id}")
    public Note updateNote(@PathVariable String id, @RequestBody Map<String, Object> patchPayload) {
        return noteService.updateNote(id, patchPayload);
    }
}