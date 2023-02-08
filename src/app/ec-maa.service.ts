import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user';
import { Admin } from './admin';
import { Itservice } from './itservice';

@Injectable({
  providedIn: 'root'
})
export class EcMaaService {
  http:HttpClient;
  viewUrl:string;
  constructor(http:HttpClient) {
    this.viewUrl='http://localhost:8080/view';
    this.http=http;
   }
   public loginUserFromRemote(user:User):Observable<any>{
      return this.http.post<any>("http://localhost:8080/user/login",user);
   }
 public registerUserFromRemote(user:User):Observable<any>{
  return this.http.post<any>("http://localhost:8080/user/registeruser",user);
 }

public loginAdminFromRemote(admin:Admin):Observable<any>{
      return this.http.post<any>("http://localhost:8080/admin/login",admin);
   }
   public getUserList():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/user/view");
   }
   public addUser(user:User):Observable<Object>{
    return this.http.post<User[]>("http://localhost:8080/user/add",user);

  }
 public getUserById(id:number):Observable<User>{
     return this.http.get<User>(`http://localhost:8080/user/getbyId/${id}`);

 }
 public updateUser(id:number,user:User):Observable<Object>{
   return this.http.put(`http://localhost:8080/user/update/${id}`,user);

}
 deleteUser(id:number):Observable<Object>{
  return this.http.delete(`http://localhost:8080/user/delete/${id}`);
 }
 public getServicelist():Observable<Itservice[]>{
  return this.http.get<Itservice[]>("http://localhost:8080/service/view");
 }

}
