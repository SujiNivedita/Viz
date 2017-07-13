import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router} from '@angular/router';
import * as globals from '../globals';

import { SimpleGlobal } from 'ng2-simple-global';

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss']
})

export class LoginComponent{
model:any={};
constructor(private _loginService:LoginService, private _router:Router){}
    login(){
        this._loginService.login(this.model)
        .subscribe(
                data => {
                    if(data){
                        // this.globals.isAuthenticatedUser=true;
                        globals.AuthenticatedUser.push(data);
                        this._router.navigate(["home"]);
                    }                    
                });
    }

}