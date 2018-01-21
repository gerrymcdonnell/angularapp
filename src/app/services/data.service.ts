//vid 35 simple service

import {Injectable} from '@angular/core';

//import obserable
import {Observable} from 'rxjs/Observable';

//import map
import 'rxjs/add/operator/map';

//import { setTimeout } from 'timers';

import {Http} from '@angular/http';

@Injectable()
export class DataService{
    users:string[];


    //data: Observable<Array<number>>;

    constructor(public http:Http){
        //this.users=['ted','doungal','bob'];

    }

    //http
    getUsers(){
        return this.http.get('http://jsonplaceholder.typicode.com/users')
        .map(res=>res.json());
    }


    //http://localhost/speechapp/rest_words/index.json
    //cross origin problem!
    getWords(){
        return this.http.get('http://speechapp.irishbloke.net/rest_exercises/index.json').map(res=>res.json());
    }




    //http://localhost/cake3restapi/words.json
    //requires an auth header with login details
    getWordswithAuth(){
        return this.http.get('http://localhost/cake3restapi/words.json')
        .map(res=>res.json());
    }

    //can ignore the errors in VS Studio below
    /*getData(){
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 1000);

            setTimeout(() => {
                observer.next(2);
            }, 2000);

            setTimeout(() => {
                observer.next(3);
            }, 3000);

            setTimeout(() => {
                observer.next('Hello');
            }, 4000);

            setTimeout(() => {
                observer.complete();
            }, 5000);
        });

        return this.data;
    }*/


    /*addUser(user){
        return this.http.post('http://jsonplaceholder.typicode.com/users',user)
        .map(res=>res.json());
    }

    deleteUser(id){
        return this.http.delete('http://jsonplaceholder.typicode.com/users/'+id)
        .map(res=>res.json());
    }

    updateUser(id){
        return this.http.put('http://jsonplaceholder.typicode.com/users/'+user.id,user)
        .map(res=>res.json());
    }*/

    
}