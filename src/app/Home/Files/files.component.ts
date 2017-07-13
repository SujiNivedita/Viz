import { Component } from '@angular/core';
import { IFile } from './files'

import { FilesService } from './files.service'

import * as globals from '../../globals';

@Component({
  templateUrl: './files.component.html',
  // styleUrls: ['./home.component.scss']
})
export class FilesComponent {
  private files: IFile[];
  errorMessage:any;
  constructor(private __filesService :FilesService){

  }
  ngOnInit(): void {
    
        this.__filesService.getMyFiles(globals.AuthenticatedUser[0]._id)
               .subscribe(
                data => {
                    if(data){
                        console.log("compont : " +data);
                        this.files = data
                    }                    
                });

    }
    
    // ngDoCheck
  }