import { Component } from '@angular/core'

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss']
})

export class LoginComponent{
model: any = {};
    login(){
        alert("do login now"+ this.model.username+ this.model.password);
    }

}