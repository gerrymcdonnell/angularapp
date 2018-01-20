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
    words:any[];

    //empty array
    data:any[]=[];

    user={
        name:'',
        email:'',
        phone:''
    }

    //default constrctor
    //Service must be added to component constructor
    constructor(public dataService:DataService){
        
        //ex1
        //console.log(users);
        
        //use data service
        this.dataService.getUsers().subscribe(users=>{
            this.users=users;
        })


        //cross origin problem needs a header
        /*this.dataService.getWords().subscribe(words=>{
            this.words=words;
            console.log(words);
        })*/


        //auth
        /*this.dataService.getWordswithAuth().subscribe(words=>{
            this.words=words;
        })*/
        
    }//end constructor

    onSubmit(){
        this.dataService.addUser(this.user).subscribe(user=>{
            this.users.unshift();
            console.log(user);
        })
    }

   

}

