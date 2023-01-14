import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent {
    @Input() note: any;
    @Output() deleteEvent = new EventEmitter<any>();

    deleteNote() {
        this.deleteEvent.emit(this.note);
    }
}
