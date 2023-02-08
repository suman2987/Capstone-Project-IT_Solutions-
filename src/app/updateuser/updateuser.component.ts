import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcMaaService } from '../ec-maa.service';
import { User } from '../user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{
  service:EcMaaService;
  user:User;
  id:number;
  constructor(service:EcMaaService,private router:Router,private route:ActivatedRoute){
   this.service=service;
   this.user=new User();
   this.id=this.route.snapshot.params['id'];
   
  }
 ngOnInit(): void {
  
  this.service.getUserById(this.id).subscribe(data=>{
    this.user=data;
   console.log(data);
   },error=>console.log(error));
   
   }
   
   onSubmit(){
    
    this.service.updateUser(this.id,this.user).subscribe(data=>{
   this.redirectToView();
    },
    error=>console.log(error));
   }
   redirectToView(){
    this.router.navigate(['userlist']).then(()=>{window.location.reload()});
   }
 }
  

