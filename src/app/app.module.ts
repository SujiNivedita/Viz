import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AlertModule } from 'ngx-bootstrap';
import { SimpleGlobal } from 'ng2-simple-global';

import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./Login/login.component";
import { AppComponent } from './app.component';
import { carouselComponent } from './carousel';
import { HomeComponent } from './Home/home.component';
import { DndComponent } from './dnd/dnd.component';
import { RegisterComponent } from './Register/register.component';
import {UploadComponent} from "./Home/Upload/upload.component";
import {PrintComponent} from "./Home/Print/print.component";
import {FilesComponent} from "./Home/Files/files.component";


import { DndDirective } from './dnd/dnd.directive';

import { LoginService } from './Login/login.service';
import { FilesService } from './Home/Files/files.service'

import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    carouselComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    FilesComponent,
    PrintComponent,
    DndComponent,
    DndDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // AlertModule.forRoot()
  ],
  providers: [SimpleGlobal,LoginService,FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
