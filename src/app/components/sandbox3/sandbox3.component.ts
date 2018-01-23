import { Component } from '@angular/core';

import { elementClass } from '@angular/core/src/render3/instructions';
import { elementDef } from '@angular/core/src/view/element';

//import speech app service
import {SpeechAppService} from '../../services/speechapp.service';
//import word
import {Word} from '../../models/word';

@Component({
  selector: 'app-sandbox3',  
  //url template file
  templateUrl: './sandbox3.component.html',  


})
export class Sandbox3Component {
    //properties
    words:any[];

    //empty array
    //data:any[]=[];


    //default constrctor
    //Service must be added to component constructor
    constructor(public dataService:SpeechAppService){
        
        //ex1
        //console.log(users);
        
        //use data service
        this.dataService.getWords().subscribe(words=>{
            this.words=words;
            console.log(this.words);
        })


        //auth
        /*this.dataService.getWordswithAuth().subscribe(words=>{
            this.words=words;
        })*/
        
    }//end constructor

    

}

