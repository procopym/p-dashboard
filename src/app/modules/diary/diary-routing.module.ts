import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DiaryComponent} from "./diary.component";
import {DiaryHomeComponent} from "./pages/home/diary-home.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {NotePreviewComponent} from "./pages/note-preview/note-preview.component";
import {CreateNoteComponent} from "./pages/create-note/create-note.component";
import {EditNoteComponent} from "./pages/edit-note/edit-note.component";


const routes: Routes = [
  {
    path: '', component: DiaryComponent, children: [
      {path: 'notes', component: DiaryHomeComponent},
      {path: 'note/:id', component: NotePreviewComponent},
      {path: 'new-note', component: CreateNoteComponent},
      {path: 'note/:id/edit', component: EditNoteComponent},
      {path: 'login', component: LoginComponent},
      {path: 'sing-up', component: SignUpComponent},
      {path: '**', redirectTo: '/diary/notes'},
    ]
  },
  {path: '**', redirectTo: '/error'}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DiaryRoutingModule {
}
