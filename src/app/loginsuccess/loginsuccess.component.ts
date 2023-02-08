import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EcMaaService } from '../ec-maa.service';

import { Itservice } from '../itservice';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  itservice:Itservice[];
     constructor(private service:EcMaaService,private router:Router){
          this.itservice=[];
      
     }
     ngOnInit(): void {
       this.getServicelist()

       
     }
     private getServicelist(){
      this.service.getServicelist().subscribe((data)=>{
       this.itservice=data;
       } );

     }
    
    
}
