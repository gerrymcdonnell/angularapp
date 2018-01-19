import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//import sandboxcompoent from components folder
import { SandboxComponent } from './components/sandbox/sandbox.component';


@NgModule({
  declarations: [    
    AppComponent,
    //import sandbox component
    SandboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
