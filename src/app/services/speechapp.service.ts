//vid 35 simple service

import {Injectable} from '@angular/core';

//import obserable
import {Observable} from 'rxjs/Observable';

//import map
import 'rxjs/add/operator/map';

//import { setTimeout } from 'timers';

import {Http} from '@angular/http';

import {Word} from '../models/Word';

@Injectable()
export class SpeechAppService{
    

    constructor(public http:Http){
        
    }

    //http://localhost/speechapp/rest_words/index.json
    getWords(){
        //local
        //return this.http.get('http://localhost/cake3restapi/words.json').map(res=>res.json());

        //remote
         return this.http.get('http://localhost/cake3restapi/words.json').map(res=>res.json());        
    }

    getWord(id:number){
        return this.http.get('http://localhost/cake3restapi/words/'+id+'.json').map(res=>res.json());
    }


    //use component 3
    //added sJSON.stringify didnt seem to help
    updateWord(id:number,word:Word){        

        console.log("doing update via PUT request");

        console.log('http://localhost/cake3restapi/words/'+id+'.json');

        return this.http.put('http://localhost/cake3restapi/words/'+id+'.json', word)
            .map(res => console.log(res.json()));
    }

    
    
}