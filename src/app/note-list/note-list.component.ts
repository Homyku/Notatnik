import { Component } from '@angular/core';
/* import { NoteDeleteComponent } from '../note-delete/note-delete.component';
 */
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
    notes: {text: string, title:string}[] = [];
    noteText = '';
    noteTitle:string =''; 

    addNote() {
        this.notes.push({text: this.noteText, title: this.noteTitle});
        this.noteText = '';
        this.noteTitle='';
      }

      deleteNote(note: {title: string, text: string}) {
        this.notes = this.notes.filter(n => n !== note);
    }
    
}
