package com.example.notesapp;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Note {
    private String title;
    private String content;
    private String id;

    private LocalDateTime timeStamp;
}
