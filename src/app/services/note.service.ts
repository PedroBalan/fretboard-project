import { Injectable } from '@angular/core';

import { Mode } from '../models/modes.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  selectedNote = 'C';
  selectedScale: Mode = 'Ionian';

  notesSequence: { [key: string]: string } = {
    A: 'A#',
    'A#': 'B',
    B: 'C',
    C: 'C#',
    'C#': 'D',
    D: 'D#',
    'D#': 'E',
    E: 'F',
    F: 'F#',
    'F#': 'G',
    G: 'G#',
    'G#': 'A',
  };

  intervalStepsByMode: Record<Mode, string> = {
    Ionian: 'wwhwwwh',
    Dorian: 'whwwwhw',
    Phrygian: 'hwwwhww',
    Lydian: 'wwwhwwh',
    Mixolydian: 'wwhwwhw',
    Aeolian: 'whwwhww',
    Locrian: 'hwwhwww',
  };


  constructor() { }

  getSelectedNote(): string {
    return this.selectedNote;
  }

  setSelectedNote(note: string): void {
    this.selectedNote = note;
  }

  getSelectedScale(): string {
    return this.selectedScale;
  }

  setSelectedScale(mode: Mode): void {
    this.selectedScale = mode;
  }

  // Returns the next note on the chromatic scale, based on the current note and on the desired interval (half-step or whole-step)
  getNextNoteByInterval(currentNote: string, step: string): string {
    if (step === 'h') {
      return this.notesSequence[currentNote];
    } else {
      return this.notesSequence[this.notesSequence[currentNote]];
    }
  }

  getScaleByMode(mode: Mode): string[] {
    const scale = [];
    let currentNote = this.selectedNote;

    scale.push(currentNote);
    this.intervalStepsByMode[mode].split('').forEach(step => {
      currentNote = this.getNextNoteByInterval(currentNote, step);
      scale.push(currentNote);
    });

    return scale;
  }
}
