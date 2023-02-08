import { Component, OnInit } from '@angular/core';
import { EnabledBlockingInitialNavigationFeature, Router } from '@angular/router';
import { EcMaaService } from '../ec-maa.service';
import { User } from '../user';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent  {
  service:EcMaaService;
  user:User;
 constructor(service:EcMaaService,private router:Router){
   this.service=service;
   this.user=new User();
 }
  
onSubmit(){
  this.service.addUser(this.user).subscribe();
    this.user=new User();
    this.redirectToView();
}
redirectToView(){
  this.router.navigate(['userlist']).then(()=>{window.location.reload()});
 }

}
