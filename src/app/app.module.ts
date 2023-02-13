import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note/note.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteDeleteComponent } from './note-delete/note-delete.component';
import { FormsModule } from '@angular/forms';
/* import * as mongoose from 'mongoose';
 */
@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteComponent,
    NoteEditComponent,
    NoteDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /* constructor() {
mongoose.connect('mongodb://localhost/nazwa_bazy_danych', { useNewUrlParser: true })
    .then(() => console.log('Połączenie z MongoDB zostało ustanowione.'))
    .catch(err => console.error('Nie udało się połączyć z MongoDB:', err)); */

}

