import { Component } from '@angular/core';

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

    deleteNote(index: number) {
        this.notes.splice(index, 1);
      }
}