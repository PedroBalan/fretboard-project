import { Component, OnInit } from '@angular/core';

import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  scale = [];
  selectedScale: Mode = 'Ionian';
  selectedNote = 'C';

  notes: string[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];


  constructor(
    private readonly noteService: NoteService,
  ) {}

  ngOnInit(): void {
    this.noteService.setSelectedScale('Ionian');
    this.noteService.setSelectedNote('C');
  }

  selectMode(mode: Mode): void {
    this.noteService.setSelectedScale(mode);
    this.selectedScale = mode;
  }

  selectNote(note: string): void {
    this.noteService.setSelectedNote(note);
    this.selectedNote = note;
  }
}
