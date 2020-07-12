import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {
    path: '', component: AppComponent, pathMatch: 'full', children: [
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ]
  },
  { path: 'error', component: ErrorPageComponent },
  { path: 'diary', loadChildren: () => import('./modules/diary/diary.module').then(mod => mod.DiaryModule) },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
