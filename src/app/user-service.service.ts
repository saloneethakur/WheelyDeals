
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http:HttpClient, public router:Router ) { }

  
  public info:any =
  {
      isLogin :false,
      token:undefined,
      role:''
  }

  public get isLogin(){return this.info.isLogin};
  public get token(){return this.info.token};
public get role(){return this.info.role};
  public saveSer(regSerpro:any):any
  {
    return this.http.post("http://localhost:8080/web/saveServiceProvider",regSerpro)
  }

  public saveCus(regCus:any):any
  {
    return this.http.post("http://localhost:8080/web/saveCustomer",regCus)
  }

  public login(loginData:any):any
  {
      return this.http.post('http://localhost:8080/web/login',loginData)
  }

  public masterVehicle(MasterVehicle:any):any
  {
    const authorize = this.getHeaders();
       return this.http.post('http://localhost:8080/admin/addMasterVehicle',MasterVehicle,{ headers: authorize })
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }
 
  public set userInfo(ob:any)
  {
    
      this.info.isLogin=ob.status;
      console.log(this.isLogin);
      this.info.token=ob.token;
      this.info.role = ob.role;
      console.log(this.info);
    if(this.info.role=='ROLE_CUSTOMER')
      {
        
        this.router.navigateByUrl("/");
      }
      else if(this.info.role=='ROLE_ADMIN')
        {
          this.router.navigateByUrl("/MasterVehicle");
        }
       else  if(this.info.role=='ROLE_SERVICEPROVIDER')
          {
            this.router.navigateByUrl("/admin");
          }
     
    
  }
  
  public checkMail(data:any):any{
    return this.http.post('http://localhost:8080/web/forget_pass',data);
  }

}
