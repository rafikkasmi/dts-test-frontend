import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { MainTaskPageComponent } from './main-task-page/main-task-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'main-task/:id', component: MainTaskPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
