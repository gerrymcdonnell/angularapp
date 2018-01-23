import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

//import sandboxcompoent from components folder
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { SandboxComponent2 } from './components/sandbox2/sandbox2.component';
import { Sandbox3Component } from './components/sandbox3/sandbox3.component';

//import Dataservice
import { DataService } from './services/data.service';

//create components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SpeechAppService } from './services/speechapp.service';
import { EditwordComponent } from './components/editword/editword.component';

//flsh messages module
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AddWordComponent } from './components/add-word/add-word.component';


//create routes for app
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  /*{path:'',component:SandboxComponent2}*/
  {path:'about',component:AboutComponent},
  {path:'sandbox1',component:SandboxComponent},
  {path:'sandbox2',component:SandboxComponent2},
  {path:'sandbox3',component:Sandbox3Component},
  {path:'word-list',component:Sandbox3Component},
  {path:'user/:id',component:UserDetailsComponent},
  {path:'edit-word/:id',component:EditwordComponent} ,
  {path:'add-word',component:AddWordComponent},
]

@NgModule({
  declarations: [    
    AppComponent,
    //import sandbox component
    SandboxComponent,
    SandboxComponent2,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent,
    Sandbox3Component,
    EditwordComponent,
    AddWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  //services are added to providers
  providers: [DataService,SpeechAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
