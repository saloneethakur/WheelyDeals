import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public cusOb:any[]=[];


  constructor(public userService:UserServiceService,public http:HttpClient) { }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.userService.token}`
    });
  }

  public getCustomer():any 
  {
    const authorize = this.getHeaders();
    return this.http.get("http://localhost:8080/admin/viewAllCustomer",{ headers: authorize})
  }
}
