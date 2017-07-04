import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AlertModule } from 'ngx-bootstrap';
import { SimpleGlobal } from 'ng2-simple-global';

import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./Login/login.component";
import { AppComponent } from './app.component';

import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // AlertModule.forRoot()
  ],
  providers: [SimpleGlobal],
  bootstrap: [AppComponent]
})
export class AppModule { }
