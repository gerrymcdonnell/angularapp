import { Component } from '@angular/core';
import {Customer} from '../Customer';
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
    name='john doe';

    //cast property to string
    name2:string='john doe2';
    
    //number type
    age:number=36;

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

    //default constrctor
    constructor(){
        console.log('Contructor ran!');

        this.age=99;

        this.hasBirthDay();

        //init customer object
        this.customer={
            id:1,
            name:'ted',
            email:'john@ted.com'
        }

        //init array of customers
        this.customers=[
            {
                id:1,
                name:'ted',
                email:'john@ted.com'
            },
            {
                id:2,
                name:'ted2',
                email:'john2@ted.com'
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
}

