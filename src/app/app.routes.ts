import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./Login/login.component"
 
import { AppComponent } from "./app.component";

const routes: Routes = [
	{path:'',component:LoginComponent},
	{path:'signIn',component:LoginComponent},
    {path: 'home',component: AppComponent}
];

export const routing = RouterModule.forRoot(routes);