import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
 
import {User} from './user'

 
var users = [
  new User('admin@admin.com','welcome'),
  new User('kavitha@gmail.com','hi')
];
 
@Injectable()
export class LoginService {
 private authenticatedUser:User;
  constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }
 
  login(user:User){
    this.authenticatedUser = 
      users.find(u => u.username === user.username);

    if (this.authenticatedUser && 
      this.authenticatedUser.password === user.password){
      localStorage.setItem("user",this.authenticatedUser.toString());
      this._router.navigate(['contacts']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['/']);
    }
  } 
}