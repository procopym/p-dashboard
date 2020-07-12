import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {DiaryComponent} from "./diary.component";
import {DiaryRoutingModule} from "./diary-routing.module";
import {DiaryHomeComponent} from "./pages/home/diary-home.component";
import { NotePreviewComponent } from './pages/note-preview/note-preview.component';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NoteComponent } from './components/note/note.component';
import { LayoutComponent } from './components/layout/layout.component';
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from './shared/services/auth.guard'
import {AuthService} from "./shared/services/auth.service";
import {SearchPipe} from "./shared/search.pipe";
import {CustomValidators} from "./shared/custom-validators";


@NgModule({
  declarations: [
    DiaryComponent,
    DiaryHomeComponent,
    NoteComponent,
    NotePreviewComponent,
    CreateNoteComponent,
    EditNoteComponent,
    LoginComponent,
    SignUpComponent,
    LayoutComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    DiaryRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService, CustomValidators]
})
export class DiaryModule { }
