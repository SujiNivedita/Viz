import { Component } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';
import { Router} from '@angular/router';
import * as globals from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title:string;
 
  constructor(private _router: Router ){
    
  }
  hideLogout(){
 if(globals.AuthenticatedUser.length == 0) 
      return true;
 else return false;
  }
  ngOnInit(){
   
    if(localStorage.getItem("currentUser") !== null){
        this.title = 'app works!';
        this._router.navigate(["home"]);
    }
    else{
      this._router.navigate(["signIn"]);
    }

  }
   logout() {
    localStorage.removeItem("currentUser");
    globals.AuthenticatedUser.length == 0;
    this._router.navigate(['signIn']);
  }
  }
  
