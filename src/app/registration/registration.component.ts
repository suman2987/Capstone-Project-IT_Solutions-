import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { EcMaaService } from '../ec-maa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 user=new User();
 msg='';
  service:EcMaaService;
  

     
 

 constructor(service:EcMaaService,private router:Router){
  this.service=service;
  
 }
 registerUser(){
  this.service.registerUserFromRemote(this.user).subscribe(
    data=>{
      console.log("response received");
      this.msg="Registratio successfull";
      this.redirectToView();
    },
    error=>{
      console.log("exception occured");
      this.msg=error.error;
    }
  )
 }
 redirectToView(){
  this.router.navigate(['login']).then(()=>{window.location.reload()});
 }
}
