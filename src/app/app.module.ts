import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


import { UserCompoComponent } from './user-compo/user-compo.component';
import { AdminCompoComponent } from './admin-compo/admin-compo.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    
   
    
    UserCompoComponent,
    AdminCompoComponent,
    LoginsuccessComponent,
    
    HomeComponent,
    AdminpageComponent,
    UserlistComponent,
    CreateuserComponent,
    UpdateuserComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule],

  providers: [],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
