import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EcMaaService } from '../ec-maa.service';
import { User } from '../user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 user =new User();
 msg='';
 
constructor(private service:EcMaaService,private route:Router){
  
}

ngOnInit() {
  
}
loginUser(){
      this.service.loginUserFromRemote(this.user).subscribe(
        data=>{
          console.log("response received");
        
        this.route.navigate(['/loginsuccess'])
      },

        error=>{console.log("exception occurred");
        this.msg="Bad Credentials";
    }
)

}
gotoregistration(){
  this.route.navigate(['/registration'])
}
}