import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCompoComponent } from './admin-compo/admin-compo.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserCompoComponent } from './user-compo/user-compo.component';
import { FormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';




const routes: Routes = [
 {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserCompoComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminCompoComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'createuser',component:CreateuserComponent},
  {path:'updateuser/:id',component:UpdateuserComponent},
  {path:'register',component:RegistrationComponent}
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

