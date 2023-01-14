import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-note-edit',
  template: `
    <div>
        <button (click)="isEditing = !isEditing">Edit</button>
        <div *ngIf="isEditing">
            <input [(ngModel)]="note.title" name="title">
            <textarea [(ngModel)]="note.text" name="note"></textarea>
            <button (click)="saveNote()">Save</button>
            <button (click)="cancelEdit()">Cancel</button>
        </div>
    </div>
  `,
  styles: []
})
export class NoteEditComponent {
    @Input() note: Note = new Note();
    @Output() saveNoteEvent = new EventEmitter<Note>();
    isEditing = false;

    saveNote() {
        this.saveNoteEvent.emit(this.note);
        this.isEditing = false;
    }

    cancelEdit() {
        this.isEditing = false;
    }
}
