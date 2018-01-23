import { Component, OnInit } from '@angular/core';

//router
import { Router } from '@angular/router';

//clinet model
import { Word } from '../../models/Word';
import { SpeechAppService } from '../../services/speechapp.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  word:Word=new Object;

  constructor(
    //add as dependancy
    public router:Router,
    public dataService:SpeechAppService
  ) { }

  ngOnInit() {
    
  }


  onSubmit({value, valid}:{value:Word, valid:boolean}){
    if(!valid){      
      this.router.navigate(['add-word']);
    } else {
      // Add new client

      console.log("add new word");


      this.dataService.addWord(value);
      this.router.navigate(['word-list/']);
    }
  }

}








