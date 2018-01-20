import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http'
import {RouterModule,Routes} from '@angular/router'

//import sandboxcompoent from components folder
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { SandboxComponent2 } from './components/sandbox2/sandbox2.component';

//import Dataservice
import { DataService } from './services/data.service';

//create components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

//create routes for app
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'sandbox1',component:SandboxComponent},
  {path:'sandbox2',component:SandboxComponent2},
  {path:'user/:id',component:UserDetailsComponent}
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
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  //services are added to providers
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
