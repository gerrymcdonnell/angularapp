import { Component } from '@angular/core';
import {Customer} from '../Customer';
import { elementClass } from '@angular/core/src/render3/instructions';
import { elementDef } from '@angular/core/src/view/element';
@Component({
  selector: 'sandbox',  
  //url template file
  templateUrl: './sandbox.component.html',
  
  //inline style back ticks
  //styles: ['.special{color:green;}']
  
  //styles file
  styleUrls:['./sandbox.component.css']

  /*template output note the backwards singlequotes
  this can alos be a html template file*/  
  /*
  template:  `<h1> hello {{name}} {{age}} </h1>
  <h2> my name is {{person.firstName}} </h2>
  <hr>
  <ul>
    <li>{{1+1}} </li>
    <li>{{showAge()}} </li>
  <ul>
  `
  */

})
export class SandboxComponent {
    //properties
    name='';

    //cast property to string
    name2:string='john doe2';
    
    //number type
    age:number=0;

    //boolean
    hasChildren:boolean=true;
    //numbers array
    myNumbersArray:number[]=[1,2,3];    
    //string array
    myStringArray:string[]=['one','two'];
    //any array
    myAnyArray:any[]=['one','two',3];
    //tuple of string and number
    myTuple:[string,number]=['hello',5];
    //void
    unusable:void=undefined;
    //undefined
    u:undefined=undefined;
    //null
    n:null=null;

    
    //object
    customer:Customer;
    //array of customers
    customers:Customer[];

    
    //object
    person={firstName:'Steve',lastname:'Smith'};

    //vid [20] array of ppl
    people=['Rick','carl','ted'];


    imageUrl='http://www.lorempixel.com/400/200';
    isUnchanged:boolean=false;

    //class binding
    isSpecial=true;
    canSave=true;

    //pipes
    birthday=new Date(1983,1,15);
    total=500;


    //2way binding ng model
    name3:string='im name 3';    
    age3:number=3;

    //forms
    users:string[]=['John','Paddy','mary'];
    

    //default constrctor
    constructor(){
        console.log('Contructor ran!');

        this.age=99;

        this.hasBirthDay();

        //init customer object
        this.customer={
            id:1,
            name:'ted',
            email:'john@ted.com',
            showName:true
        }

        //init array of customers
        this.customers=[
            {
                id:1,
                name:'ted',
                email:'john@ted.com',
                showName:true
            },
            {
                id:2,
                name:'ted2',
                email:'john2@ted.com',
                showName:true
            },
            {
                id:3,
                name:'ted3',
                email:'john3@ted.com',
                showName:false
            },
        ]
        
    }

    //custom method
    hasBirthDay(){
        this.age+=1;
    }

    showAge(){
        return this.age;
    }

    //events
    fireEvent(e){
        //console.log("fire event");
        //console.log(greeting);
        console.log(e.type);
    }

    text:string="hello world";
    value:boolean=true;

    changeValue(){
        /*this.text='FAIRWELL WORLD';
        this.value=false;*/
        this.value=!this.value;        
    }

    changeText(e){
        this.text=e.target.value;
    }

    //submit
    
    onSubmit(){
        this.users.push(this.name);
    }

}

