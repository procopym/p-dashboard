import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiaryComponent} from "./diary.component";
import {DiaryRoutingModule} from "./diary-routing.module";
import {DiaryHomeComponent} from "./pages/home/diary-home.component";
import { NoteComponent } from './components/note/note.component';
import { NotePreviewComponent } from './pages/note-preview/note-preview.component';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    DiaryComponent,
    DiaryHomeComponent,
    NoteComponent,
    NotePreviewComponent,
    CreateNoteComponent,
    EditNoteComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
