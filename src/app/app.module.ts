import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http'

//import sandboxcompoent from components folder
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { SandboxComponent2 } from './components/sandbox2/sandbox2.component';

//import Dataservice
import { DataService } from './services/data.service';

@NgModule({
  declarations: [    
    AppComponent,
    //import sandbox component
    SandboxComponent,
    SandboxComponent2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //services are added to providers
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
