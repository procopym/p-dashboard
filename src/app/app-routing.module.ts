import { NgModule } from '@angular/core';
import {Routes, RouterModule, NoPreloading} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: HomeComponent}
    ]
  },
  { path: 'error', component: ErrorPageComponent },
  { path: 'diary', loadChildren: () => import('./modules/diary/diary.module').then(mod => mod.DiaryModule) },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
