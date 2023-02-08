import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EcMaaService } from '../ec-maa.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-compo',
  templateUrl: './admin-compo.component.html',
  styleUrls: ['./admin-compo.component.css']
})
export class AdminCompoComponent {
   admin=new Admin();
  service:EcMaaService;
  msg:string='';
  
  constructor(private router:Router,service:EcMaaService){
  this.service=service;
  }
  loginAdmin(){
    this.service.loginAdminFromRemote(this.admin).subscribe(
      data=>{
        console.log("response received");
      
      this.router.navigate(['/adminpage'])
    },

      error=>{console.log("exception occurred");
      this.msg="Bad Credentials";                   
  }
)

}
gotoAdminPage(){
  this.router.navigate(['/adminPage'])
}
goToHomepage(){
  // this.router.navigate(['/home']);
  this.router.navigateByUrl('/home');

}
}
