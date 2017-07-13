import { Component } from '@angular/core'

@Component({
    templateUrl:'./register.component.html'
})

export class RegisterComponent{
    private model:any={};

    constructor(){

    }
    register(){
        alert(JSON.stringify(this.model));
    }
}