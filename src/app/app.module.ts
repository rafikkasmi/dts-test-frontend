import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { MainTaskPageComponent } from './main-task-page/main-task-page.component';
import { MainTaskFormComponent } from './main-task-form/main-task-form.component';
import { JiraTaskFormComponent } from './jira-task-form/jira-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    MainTaskPageComponent,
    MainTaskFormComponent,
    JiraTaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
