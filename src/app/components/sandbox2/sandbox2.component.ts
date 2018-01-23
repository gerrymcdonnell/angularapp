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
        id:'',
        name:'',
        email:'',
        phone:''
    }

    //is it an edit or a new
    isEdit:boolean=false;

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

    onSubmit(isEdit){
        
        console.log("isEdit=" +isEdit);

        if(isEdit){
            //edit user      

            this.dataService.updateUser(this.user).subscribe(user=>{
                
                console.log("calling updateUser()");

                //look for the one we edited and add new one back
                for(let i=0;i<this.users.length;i++){
                    if(this.users[i].id==this.user.id){
                        //splice removes elements from an array
                        this.users.splice(i,1);
                        console.log("doing splice");
                    }
                }
                this.users.unshift(this.user);
            })
        }
        else{
            //its an add user
            this.dataService.addUser(this.user).subscribe(user=>{
                this.users.unshift();
                console.log(user);
            })
        }  
    }


    onDeleteClick(id){
        this.dataService.deleteUser(id).subscribe(res=>{
            console.log(res);
            
            //loop all users and find the one we just deleted
            for(let i=0;i<this.users.length;i++){
                if(this.users[i].id==id){
                    //splice removes elements from an array
                    this.users.splice(i,1);
                }
            }

        })
    }

    onEditClick(user){
        this.isEdit=true;
        this.user=user;
        console.log("edit button clicked - onEditClick()");
    }

   

}

