import { Component, OnInit } from '@angular/core';

//import word
import {Word} from '../../models/word';
import {SpeechAppService} from '../../services/speechapp.service';

import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editword',
  templateUrl: './editword.component.html',
  styleUrls: ['./editword.component.css']
})
export class EditwordComponent implements OnInit {

  //works
  id:number;
  word:Word=new Object;

  constructor(
    public dataService:SpeechAppService,
    public router:Router,
    public route:ActivatedRoute

  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.dataService.getWord(this.id).subscribe(w => {
      
      console.log("edit word "+w);    
      console.log(w);      
      
      this.word = w;     
      
    });
  }

  onSubmit({value, valid}:{value:Word, valid:boolean}){
    if(!valid){
      //this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['edit-word/'+this.id]);
    } else {
      
      // Update word
      console.log(value);      
      this.dataService.updateWord(this.id,value);




      
      //this.flashMessagesService.show('Client updated', {cssClass:'alert-success', timeout: 4000});
      
      /*edit word url
      this.router.navigate(['/word-details/'+this.id]);*/

      this.router.navigate(['sandbox3/'])
    }
  }

}
