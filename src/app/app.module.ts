import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { SuccessComponent } from './success/success.component';
import { AssignmentComponent } from './components/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
