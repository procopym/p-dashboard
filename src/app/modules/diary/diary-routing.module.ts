import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DiaryComponent} from "./diary.component";
import {DiaryHomeComponent} from "./pages/home/diary-home.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {NotePreviewComponent} from "./pages/note-preview/note-preview.component";
import {CreateNoteComponent} from "./pages/create-note/create-note.component";
import {EditNoteComponent} from "./pages/edit-note/edit-note.component";
import {AuthGuard} from "./shared/services/auth.guard"


const routes: Routes = [
  {
    path: '', component: DiaryComponent, children: [
      {path: 'notes', component: DiaryHomeComponent, canActivate: [AuthGuard]},
      {path: 'note/:id', component: NotePreviewComponent, canActivate: [AuthGuard]},
      {
        path: 'new-note',
        component: CreateNoteComponent,
        canActivate: [AuthGuard]
      },
      {path: 'note/:id/edit', component: EditNoteComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
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
