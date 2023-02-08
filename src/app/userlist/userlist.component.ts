import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcMaaService } from '../ec-maa.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
     user:User[];
     constructor(private service:EcMaaService,private router:Router){
          this.user=[];
      
     }
     ngOnInit(): void {
       this.getUser()

       
     }
     private getUser(){
      this.service.getUserList().subscribe((data)=>{
       this.user=data;
       } );

     }
     updateUser(id:number){
      this.router.navigate(['updateuser',id]);
     }
     deleteUser(id:number){
      this.service.deleteUser(id).subscribe(data=>{
       // console.log(data);
        this.getUser();
      })
     }
}
