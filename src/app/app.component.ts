import { Component } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;

  constructor(private globals : SimpleGlobal ,private _router: Router ){

  }
  ngOnInit(){
    if(this.globals['isAuthenticated']){
      this.title = 'app works!';
  }
  else{
    this._router.navigate(["signIn"]);
  }

  }
  }
  
