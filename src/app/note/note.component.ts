import { Component, Input } from '@angular/core';
import { Note } from '../note-edit/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']

})
export class NoteComponent {
    @Input() note: Note = new Note();

    @Input() title!: string;

    onDelete(note: string) {
        // Delete the note from the notes array
    }
}
