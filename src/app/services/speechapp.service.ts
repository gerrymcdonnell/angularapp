//vid 35 simple service

import {Injectable} from '@angular/core';

//import obserable
import {Observable} from 'rxjs/Observable';

//import map
import 'rxjs/add/operator/map';

//import { setTimeout } from 'timers';

import {Http} from '@angular/http';

//import {Word} from '../models/Word';

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

    //http://localhost/cake3restapi/words.json
    //requires an auth header with login details
    /*getWordswithAuth(){
        return this.http.get('http://localhost/cake3restapi/words.json')
        .map(res=>res.json());
    }*/

    
    
}