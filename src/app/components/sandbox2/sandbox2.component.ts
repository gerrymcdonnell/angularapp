import { Component } from '@angular/core';
import {Customer} from '../Customer';
import { elementClass } from '@angular/core/src/render3/instructions';
import { elementDef } from '@angular/core/src/view/element';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'sandbox2',  
  //url template file
  templateUrl: './sandbox2.component.html',  


})
export class SandboxComponent2 {
    //properties
    
    //users array
    users:any[];

    //empty array
    data:any[]=[];

    //default constrctor
    //Service must be added to component constructor
    constructor(public dataService:DataService){
        
        //ex1
        //console.log(users);
        
        //use data service
        //this.users=this.dataService.getUsers();

        this.dataService.getUsers().subscribe(users=>{

            this.users=users;
        })
        
    }//end constructor

   

}

