import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./Login/login.component"
import {RegisterComponent} from "./Register/register.component"
import {UploadComponent} from "./Home/Upload/upload.component"
import {PrintComponent} from "./Home/Print/print.component"
import {FilesComponent} from "./Home/Files/files.component"
 
import { AppComponent } from "./app.component";

import { HomeComponent } from './Home/home.component';

const routes: Routes = [
	{path:'',component:LoginComponent},
	{path:'signIn',component:LoginComponent},
    {path: 'home',component: HomeComponent,
	children: [
      {
        path: 'upload',
        component: UploadComponent,
	},
	{
        path: 'print',
        component: PrintComponent,
	},
	{
        path: 'files',
        component: FilesComponent,
	},
	{
	 path: 'welcome',
        component: FilesComponent,
	}
	]},
	{path: 'register',component:RegisterComponent }
];

export const routing = RouterModule.forRoot(routes);