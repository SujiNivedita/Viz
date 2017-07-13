import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response } from '@angular/http';
import { SimpleGlobal } from 'ng2-simple-global';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from './user';


 
@Injectable()
export class LoginService {
 private globals : SimpleGlobal;
 private _loginUrl = 'http://localhost:3001/user/login';

  constructor(  
    private _router: Router,
    private _http: Http){}
 
 
 
   public login(credentials:any): Observable<IUser> {
    //  let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
        return this._http.post(this._loginUrl,credentials)
            .map((response: Response) => {
              <IUser[]> response.json()
              let res :any =response.json();
              
                if (res.length !=0 && res[0]._id) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(res[0]._id));
                    // this.globals['isAuthenticated']=true;
                }
 
                return res[0];
            })
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
 
   
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['/']);
    }
  } 
   private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}