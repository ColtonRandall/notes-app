# Notes App 📝

A full-stack Java/Spring Boot + React notes app where you can create, view, delete personal notes.

The idea was to build a structure similar to [Google Keep](https://keep.google.com), with a Mason Jar layout where notes stack on top of each other to fill the whitespace created by larger notes.

## Stack

- [Backend](https://github.com/ColtonRandall/notes-app/tree/main/backend): Java 24 + Spring Boot
- [Frontend](https://github.com/ColtonRandall/notes-app/tree/main/frontend): React + Vite

## Features

- Create notes with a title and content
- View all notes
- Delete a note
- Update an existing note

## Layout

Full screen (dark):
![](./frontend/public/images/note-desktop-dark.png)

Full screen (light):
![](./frontend/public/images/note-desktop-light.png)

Tablet (dark):
![](./frontend/public/images/note-tablet-dark.png)

Tablet (light):
![](./frontend/public/images/note-tablet-light.png)

Mobile (dark):
![](./frontend/public/images/note-mobile-dark.png)

Mobile (light):
![](./frontend/public/images/note-mobile-light.png)

## Roadmap

- [x] Basic CRUD operations
- [x] Add note creation timestamps
- [x] Dark mode toggle
- [ ] Unit tests (JUnit - backend, Jest - frontend)
- [ ] Store note data in database
- [ ] Deploy to AWS
- [ ] Containerisation / Docker
- [ ] User authentication
